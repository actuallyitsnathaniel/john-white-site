/**
 * Performance utility functions for optimized operations
 */

// Debounce function with proper TypeScript types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
}

// Throttle function with proper TypeScript types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Memoization function for expensive computations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function memoize<Args extends any[], Return>(
  fn: (...args: Args) => Return
): (...args: Args) => Return {
  const cache = new Map<string, Return>();
  
  return (...args: Args): Return => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    const result = fn(...args);
    cache.set(key, result);
    
    return result;
  };
}

// Image preloader utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch function calls to avoid excessive re-renders
export function batchUpdates<T>(
  updates: Array<() => T>,
  batchSize = 10
): Promise<T[]> {
  return new Promise((resolve) => {
    const results: T[] = [];
    let currentBatch = 0;
    
    const processBatch = () => {
      const start = currentBatch * batchSize;
      const end = Math.min(start + batchSize, updates.length);
      
      for (let i = start; i < end; i++) {
        results.push(updates[i]());
      }
      
      currentBatch++;
      
      if (end < updates.length) {
        requestAnimationFrame(processBatch);
      } else {
        resolve(results);
      }
    };
    
    requestAnimationFrame(processBatch);
  });
}

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Intersection Observer utility for lazy loading
export class LazyLoader {
  private observer: IntersectionObserver;
  
  constructor(
    callback: (entry: IntersectionObserverEntry) => void,
    options: IntersectionObserverInit = {}
  ) {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(callback);
    }, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options,
    });
  }
  
  observe(element: Element): void {
    this.observer.observe(element);
  }
  
  unobserve(element: Element): void {
    this.observer.unobserve(element);
  }
  
  disconnect(): void {
    this.observer.disconnect();
  }
}