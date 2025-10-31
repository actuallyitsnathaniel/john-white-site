import { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export const usePerformanceMonitor = (componentName: string) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const renderStartTime = useRef<number>(0);
  const frameCount = useRef<number>(0);
  const lastTime = useRef<number>(performance.now());

  useEffect(() => {
    renderStartTime.current = performance.now();
  });

  useEffect(() => {
    const measureRenderTime = () => {
      const renderTime = performance.now() - renderStartTime.current;
      
      // Measure FPS
      frameCount.current++;
      const now = performance.now();
      const delta = now - lastTime.current;
      
      if (delta >= 1000) { // Update every second
        const fps = Math.round((frameCount.current * 1000) / delta);
        frameCount.current = 0;
        lastTime.current = now;

        // Measure memory usage (if available)
        // Chrome-specific PerformanceMemory API
        interface PerformanceWithMemory extends Performance {
          memory?: {
            usedJSHeapSize: number;
            totalJSHeapSize: number;
            jsHeapSizeLimit: number;
          };
        }
        const perfWithMemory = performance as PerformanceWithMemory;
        const memoryUsage = perfWithMemory.memory
          ? perfWithMemory.memory.usedJSHeapSize / 1024 / 1024 // MB
          : 0;

        setMetrics({
          renderTime,
          memoryUsage,
          fps,
        });

        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`Performance [${componentName}]:`, {
            renderTime: `${renderTime.toFixed(2)}ms`,
            memoryUsage: `${memoryUsage.toFixed(2)}MB`,
            fps: `${fps}fps`,
          });
        }
      }
    };

    measureRenderTime();
  });

  return metrics;
};

// Hook for monitoring Web Vitals
export const useWebVitals = () => {
  const [vitals, setVitals] = useState<Record<string, number>>({});

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setVitals(prev => ({
            ...prev,
            'First Contentful Paint': navEntry.loadEventEnd - navEntry.loadEventStart,
            'DOM Content Loaded': navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            'Load Complete': navEntry.loadEventEnd - navEntry.fetchStart,
          }));
        }
        
        if (entry.entryType === 'paint') {
          setVitals(prev => ({
            ...prev,
            [entry.name]: entry.startTime,
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'paint'] });

    return () => observer.disconnect();
  }, []);

  return vitals;
};