import React, { useEffect, useState, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

interface Event {
  id: string;
  datetime: string;
  venue: {
    name: string;
    city: string;
    region: string;
    country: string;
  };
  lineup: string[];
  offers: {
    type: string;
    url: string;
    status: string;
  }[];
  url: string;
}

interface BandsintownEventsProps {
  artistName: string;
  appId: string;
  initialView?: "upcoming" | "past";
  perPage?: number;
}

// ponytail: Variants isn't exported by motion/react; plain object + `as const` so motion's
// strict types read "easeIn"/"easeOut" as Easing literals, not widened string
const fadeVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.2, ease: "easeIn" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.15, ease: "easeIn" },
  },
} as const;

function getIWasThereUrl(
  event: Event,
  appId: string,
  artistSlug: string,
): string {
  const base = `https://www.bandsintown.com/e/${event.id}-${artistSlug}`;
  const params = new URLSearchParams({
    affil_code: appId,
    app_id: appId,
    came_from: "700",
    event_id: event.id,
    trigger: "rate",
    utm_campaign: "event",
    utm_medium: "web",
    utm_source: "widget",
  });
  return `${base}?${params.toString()}`;
}

const BandsintownEvents: React.FC<BandsintownEventsProps> = ({
  artistName,
  appId,
  initialView = "upcoming",
  perPage = 5,
}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"upcoming" | "past">(initialView);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // true once the user clicks a tab, so the empty-upcoming auto-fallback never overrides a deliberate choice
  const userPicked = useRef(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${encodeURIComponent(
            artistName,
          )}/events?app_id=${appId}&date=${view}`,
        );
        if (!response.ok) {
          throw new Error(`Error fetching events: ${response.statusText}`);
        }
        const data: Event[] = await response.json();
        // No upcoming shows and the user hasn't chosen a tab → fall back to past.
        // Keep loading true so the refetch shows no flash of empty content.
        if (view === "upcoming" && data.length === 0 && !userPicked.current) {
          setView("past"); // the view change re-runs this effect to fetch past events
          return;
        }
        setEvents(data);
        setCurrentPage(1);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [artistName, appId, view]);

  // Memoize expensive calculations
  const { paginatedEvents, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    const reversedEvents = [...events].reverse();
    const paginated = reversedEvents.slice(startIndex, startIndex + perPage);
    const pages = Math.ceil(events.length / perPage);

    return {
      paginatedEvents: paginated,
      totalPages: pages,
    };
  }, [events, currentPage, perPage]);

  return (
    <div className="max-w-[90vw] mx-auto text-white">
      <div className="flex justify-center gap-4 mb-10 text-lg">
        {(["upcoming", "past"] as const).map((tab) => {
          const active = view === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                userPicked.current = true;
                setView(tab);
              }}
              aria-pressed={active}
              className={`px-6 py-2 rounded-full border transition duration-300 ${
                active
                  ? "border-yellow-200 bg-yellow-200 text-black font-semibold"
                  : "border-yellow-200/40 text-yellow-200 hover:border-yellow-200 hover:-translate-y-0.5"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 0.4 }}
            className="text-center py-4 text-lg text-white/70"
          >
            loading events...
          </motion.div>
        ) : error ? (
          <motion.div
            key="error"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 0.4 }}
            className="text-center py-4 text-white/60 text-lg"
          >
            Error: {error}
          </motion.div>
        ) : (
          <motion.div
            key={`${view}-${currentPage}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 0.4 }}
          >
            {paginatedEvents.length === 0 ? (
              <div className="text-center py-4 text-lg text-white/70">
                nothing yet.
              </div>
            ) : (
              <ul className="w-[90vw] mx-auto divide-y divide-white/20">
                {paginatedEvents.map((event) => {
                  const eventDate = new Date(event.datetime);
                  const formattedDate = eventDate.toLocaleDateString(
                    undefined,
                    {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    },
                  );

                  return (
                    <li key={event.id} className="py-4">
                      <div className="flex flex-row items-center justify-between text-sm md:text-base text-white w-full">
                        {/* Left Section: Date, Venue, Lineup */}
                        <div className="flex flex-col text-left w-[33%]">
                          <p className="font-semibold">{formattedDate}</p>
                          <p>{event.venue.name}</p>
                          <p className="text-sm italic text-white/70">
                            {event.lineup.join(", ")}
                          </p>
                        </div>

                        {/* Middle Section: City, State */}
                        <div className=" text-white/80 w-[33%] text-left">
                          {event.venue.city}, {event.venue.region}
                        </div>

                        {/* Right Section: Tickets or "I was there" */}
                        <div className="text-right w-[33%]">
                          {event.offers.length > 0 ? (
                            event.offers.map((offer, index) => (
                              <a
                                key={index}
                                href={offer.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-xs md:text-sm px-4 py-2 rounded-full bg-yellow-200 text-black font-semibold transition duration-300 hover:bg-yellow-100 hover:-translate-y-0.5"
                              >
                                {offer.type === "Tickets"
                                  ? "Buy Tickets"
                                  : offer.type}
                              </a>
                            ))
                          ) : (
                            <a
                              href={getIWasThereUrl(event, appId, artistName)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-xs md:text-sm px-4 py-2 rounded-full border border-yellow-200/40 text-yellow-200 transition duration-300 hover:border-yellow-200 hover:-translate-y-0.5"
                            >
                              I was there ✋🏻
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8 text-lg">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="px-5 py-1.5 rounded-full border border-yellow-200/40 text-yellow-200 transition duration-300 enabled:hover:border-yellow-200 enabled:hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span className="px-2 text-white/70">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  className="px-5 py-1.5 rounded-full border border-yellow-200/40 text-yellow-200 transition duration-300 enabled:hover:border-yellow-200 enabled:hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BandsintownEvents;
