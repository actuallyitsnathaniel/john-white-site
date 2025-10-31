import { useEffect, useState } from 'react';
import { preloadImage } from '../util/performance';

interface PreloaderState {
  isLoading: boolean;
  progress: number;
  error: string | null;
}

// Hook for preloading critical resources
export const usePreloader = (resources: string[]): PreloaderState => {
  const [state, setState] = useState<PreloaderState>({
    isLoading: true,
    progress: 0,
    error: null,
  });

  useEffect(() => {
    if (resources.length === 0) {
      setState({ isLoading: false, progress: 100, error: null });
      return;
    }

    let completed = 0;
    let hasError = false;

    const updateProgress = () => {
      completed += 1;
      const progress = Math.round((completed / resources.length) * 100);
      
      setState(prev => ({
        ...prev,
        progress,
        isLoading: completed < resources.length && !hasError,
      }));
    };

    const handleError = (error: unknown) => {
      hasError = true;
      const errorMessage = error instanceof Error ? error.message : 'Failed to load resources';
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
    };

    // Preload all resources
    const promises = resources.map(resource => {
      // Check if it's an image by extension
      if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(resource)) {
        return preloadImage(resource)
          .then(updateProgress)
          .catch(handleError);
      }
      
      // For other resources (like videos), use fetch
      return fetch(resource)
        .then(response => {
          if (!response.ok) throw new Error(`Failed to fetch ${resource}`);
          return response.blob();
        })
        .then(updateProgress)
        .catch(handleError);
    });

    Promise.allSettled(promises).then(() => {
      if (!hasError) {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    });
  }, [resources]);

  return state;
};

// Hook for lazy loading images with Intersection Observer
export const useLazyImage = (src: string, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            preloadImage(src)
              .then(() => {
                setImageSrc(src);
                setIsLoaded(true);
              })
              .catch(() => {
                setImageSrc(placeholder);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.createElement('div');
    observer.observe(element);

    return () => observer.disconnect();
  }, [src, placeholder]);

  return { imageSrc, isLoaded };
};