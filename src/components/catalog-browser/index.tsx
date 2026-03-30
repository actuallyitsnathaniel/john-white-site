import { useRef, useMemo, memo, useState, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { motion, AnimatePresence } from "motion/react";
import Disc from "../discography/disc";

interface CatalogDisc {
  id: number;
  title?: string;
  artwork?: string;
  releaseType: "single" | "album" | "ep" | "appearance";
  releaseDate?: string;
  appleMusicLink?: string;
  spotifyLink?: string;
  soundcloudLink?: string;
  tidalLink?: string;
  youtubeLink?: string;
  webLink?: string;
  lyrics?: string;
}

interface CatalogBrowserProps {
  items: CatalogDisc[];
}

const TABS = ["singles / EPs", "albums", "appears on"] as const;
type Tab = (typeof TABS)[number];

type Row = { kind: "disc-row"; discs: CatalogDisc[] };

const DISC_SIZE = 312; // 288px card + 24px padding
const DISC_ROW_HEIGHT = DISC_SIZE + 48; // card + title label

function getColCount(vw: number): number {
  if (vw >= 1280) return 4;
  if (vw >= 900) return 3;
  if (vw >= 600) return 2;
  return 1;
}

function buildRows(items: CatalogDisc[], cols: number): Row[] {
  const rows: Row[] = [];
  for (let i = 0; i < items.length; i += cols) {
    rows.push({ kind: "disc-row", discs: items.slice(i, i + cols) });
  }
  return rows;
}

function filterByTab(items: CatalogDisc[], tab: Tab): CatalogDisc[] {
  if (tab === "singles / EPs")
    return items.filter(
      (d) => d.releaseType === "single" || d.releaseType === "ep",
    );
  if (tab === "albums") return items.filter((d) => d.releaseType === "album");
  return items.filter((d) => d.releaseType === "appearance");
}

const CatalogBrowser = memo<CatalogBrowserProps>(({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(() => window.innerWidth);
  const [activeTab, setActiveTab] = useState<Tab>("singles / EPs");

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [activeTab]);

  const cols = useMemo(() => getColCount(vw), [vw]);

  const tabCounts = useMemo(
    () => ({
      "singles / EPs": items.filter(
        (d) => d.releaseType === "single" || d.releaseType === "ep",
      ).length,
      albums: items.filter((d) => d.releaseType === "album").length,
      "appears on": items.filter((d) => d.releaseType === "appearance").length,
    }),
    [items],
  );

  const tabItems = useMemo(
    () => filterByTab(items, activeTab),
    [items, activeTab],
  );
  const rows = useMemo(() => buildRows(tabItems, cols), [tabItems, cols]);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => DISC_ROW_HEIGHT,
    overscan: 3,
  });

  return (
    <div
      className="flex flex-col w-full"
      style={{ height: "calc(100dvh - 4rem)" }}
    >
      {/* Tab bar */}
      <div className="sticky top-0 z-10 flex justify-center gap-1 py-3 ">
        {TABS.filter((tab) => tabCounts[tab] > 0).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-5 py-1.5 text-sm font-semibold tracking-widest lowercase transition-colors duration-150 ${
              activeTab === tab
                ? "text-white border-b border-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Virtualised grid */}
      <div
        ref={scrollRef}
        className="w-full overflow-y-auto flex-1"
        style={{ scrollbarWidth: "none", overscrollBehavior: "contain" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              position: "relative",
              width: "100%",
            }}
          >
            {virtualizer.getVirtualItems().map((virtualRow) => {
              const row = rows[virtualRow.index];
              if (!row) return null;
              return (
                <div
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  ref={virtualizer.measureElement}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <motion.div
                    className="flex flex-wrap justify-center w-full"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {row.discs.map((disc) => (
                      <Disc
                        key={disc.id}
                        id={disc.id}
                        title={disc.title}
                        artwork={disc.artwork}
                        releaseType={disc.releaseType}
                        releaseDate={disc.releaseDate}
                        appleMusicLink={disc.appleMusicLink}
                        spotifyLink={disc.spotifyLink}
                        soundcloudLink={disc.soundcloudLink}
                        tidalLink={disc.tidalLink}
                        youtubeLink={disc.youtubeLink}
                        webLink={disc.webLink}
                        lyrics={disc.lyrics}
                      />
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});

CatalogBrowser.displayName = "CatalogBrowser";

export default CatalogBrowser;
export type { CatalogDisc };
