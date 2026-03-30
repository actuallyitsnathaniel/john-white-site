import { useEffect, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LyricsViewerProps {
  lyrics: string;
  title?: string;
  onClose: () => void;
}

/** Split raw lyrics string into displayable lines, preserving blank lines as spacers. */
function splitLyrics(lyrics: string): string[] {
  return lyrics.split(/\r?\n/);
}

const LINE_STAGGER_MS = 120;
const FONT_SIZE = 22;
const LINE_HEIGHT = FONT_SIZE * 1.6; // stable constant, no canvas measurement needed

const LyricsViewer = memo<LyricsViewerProps>(({ lyrics, title, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lineHeight = LINE_HEIGHT;

  const lines = splitLyrics(lyrics);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll while open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      <motion.div
        key="lyrics-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-start overflow-hidden"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-label={`Lyrics for ${title || "this release"}`}
      >
        {/* Header */}
        <div className="w-full flex items-center justify-between px-6 pt-6 pb-4 max-w-2xl">
          {title && (
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase">
              {title.toLowerCase()}
            </p>
          )}
          <button
            onClick={onClose}
            className="ml-auto text-white/40 hover:text-white transition-colors text-3xl leading-none focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
            aria-label="Close lyrics"
          >
            ×
          </button>
        </div>

        {/* Scrollable lyrics */}
        <div
          ref={scrollRef}
          className="w-full max-w-2xl overflow-y-auto px-6 pb-16 flex-1"
          style={{ scrollbarWidth: "none" }}
        >
          <div
            className="flex flex-col items-center text-center"
            style={{ lineHeight: `${lineHeight}px` }}
          >
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * (LINE_STAGGER_MS / 1000),
                  ease: "easeOut",
                }}
                className={`w-full font-['Lusitana',serif] text-white ${
                  line.trim() === ""
                    ? "h-6" // blank line spacer
                    : "text-xl"
                }`}
                style={{ fontSize: line.trim() === "" ? 0 : FONT_SIZE }}
                aria-hidden={line.trim() === ""}
              >
                {line || "\u00A0"}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

LyricsViewer.displayName = "LyricsViewer";

export default LyricsViewer;
