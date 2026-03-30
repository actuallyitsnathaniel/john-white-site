import { useRef, useMemo, memo } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { motion } from "motion/react";
import CanvasText from "../canvas-text";
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

type SectionType = "singles / EPs" | "albums" | "appears on";

type Row =
  | { kind: "header"; label: SectionType }
  | { kind: "disc-row"; discs: CatalogDisc[] };

const DISC_SIZE = 312; // 288px card + 24px padding
const SECTION_HEADER_HEIGHT = 120; // conservative fixed estimate for 60px italic header + padding
const DISC_ROW_HEIGHT = DISC_SIZE + 48; // card + title label

/** How many disc cards fit per row given current viewport width. */
function discsPerRow(): number {
  const vw = window.innerWidth;
  if (vw >= 1280) return 4;
  if (vw >= 900) return 3;
  if (vw >= 600) return 2;
  return 1;
}

/** Build a flat row list from sorted discs. */
function buildRows(items: CatalogDisc[]): Row[] {
  const sections: { label: SectionType; discs: CatalogDisc[] }[] = [
    {
      label: "singles / EPs",
      discs: items.filter(
        (d) => d.releaseType === "single" || d.releaseType === "ep"
      ),
    },
    {
      label: "albums",
      discs: items.filter((d) => d.releaseType === "album"),
    },
    {
      label: "appears on",
      discs: items.filter((d) => d.releaseType === "appearance"),
    },
  ];

  const cols = discsPerRow();
  const rows: Row[] = [];

  for (const section of sections) {
    if (section.discs.length === 0) continue;
    rows.push({ kind: "header", label: section.label });
    for (let i = 0; i < section.discs.length; i += cols) {
      rows.push({ kind: "disc-row", discs: section.discs.slice(i, i + cols) });
    }
  }

  return rows;
}

const CatalogBrowser = memo<CatalogBrowserProps>(({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const rows = useMemo(() => buildRows(items), [items]);

  const estimateSize = (index: number): number => {
    const row = rows[index];
    if (!row) return DISC_ROW_HEIGHT;
    if (row.kind === "header") return SECTION_HEADER_HEIGHT;
    return DISC_ROW_HEIGHT;
  };

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize,
    overscan: 3,
  });

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-y-auto"
      style={{
        height: "calc(100dvh - 4rem)",
        scrollbarWidth: "none",
        overscrollBehavior: "contain",
      }}
    >
      <div
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
              {row.kind === "header" ? (
                <div className="flex justify-center py-6 px-4">
                  <h2>
                    <CanvasText
                      text={row.label}
                      font="Lusitana"
                      fontSize={60}
                      italic
                      animateOnView
                    />
                  </h2>
                </div>
              ) : (
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});

CatalogBrowser.displayName = "CatalogBrowser";

export default CatalogBrowser;
export type { CatalogDisc };
