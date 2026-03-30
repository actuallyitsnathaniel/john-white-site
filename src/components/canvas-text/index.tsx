import { useEffect, useRef, memo, useCallback } from "react";

interface CanvasTextProps {
  text: string;
  font?: string;
  fontSize?: number;
  color?: string;
  italic?: boolean;
  className?: string;
  animateOnView?: boolean;
}

const CHAR_DELAY_MS = 38;

const CanvasText = memo<CanvasTextProps>(({
  text,
  font = "Lusitana",
  fontSize = 60,
  color = "#ffffff",
  italic = false,
  className = "",
  animateOnView = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const hasAnimated = useRef(false);

  const fontString = `${italic ? "italic " : ""}${fontSize}px "${font}", serif`;

  const drawFrame = useCallback((
    ctx: CanvasRenderingContext2D,
    chars: string[],
    canvasWidth: number,
    canvasHeight: number,
    now: number
  ) => {
    const elapsed = now - startTimeRef.current;
    const charsToShow = Math.min(Math.floor(elapsed / CHAR_DELAY_MS) + 1, chars.length);

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.font = fontString;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";

    let displayText = "";
    for (let i = 0; i < charsToShow; i++) {
      displayText += chars[i];
    }

    ctx.fillText(displayText, 0, fontSize * 0.1);

    // Grain overlay — only touch pixels that have content
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 0) {
        const noise = (Math.random() - 0.5) * 55;
        data[i]     = Math.min(255, Math.max(0, data[i]     + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }
    }
    ctx.putImageData(imageData, 0, 0);

    if (charsToShow < chars.length) {
      rafRef.current = requestAnimationFrame((t) =>
        drawFrame(ctx, chars, canvasWidth, canvasHeight, t)
      );
    }
  }, [fontString, color, fontSize]);

  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Size the canvas using the native canvas measureText — no pretext needed here
    ctx.font = fontString;
    const metrics = ctx.measureText(text);
    const canvasWidth = Math.ceil(metrics.width) + 4;
    const canvasHeight = Math.ceil(fontSize * 1.4);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    const chars = [...text];
    startTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame((t) =>
      drawFrame(ctx, chars, canvasWidth, canvasHeight, t)
    );
  }, [text, fontString, fontSize, drawFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (animateOnView) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(canvas);
      return () => {
        observer.disconnect();
        cancelAnimationFrame(rafRef.current);
      };
    } else {
      startAnimation();
      return () => cancelAnimationFrame(rafRef.current);
    }
  }, [animateOnView, startAnimation]);

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      <span className="sr-only">{text}</span>
      <canvas ref={canvasRef} aria-hidden="true" style={{ display: "block" }} />
    </span>
  );
});

CanvasText.displayName = "CanvasText";

export default CanvasText;
