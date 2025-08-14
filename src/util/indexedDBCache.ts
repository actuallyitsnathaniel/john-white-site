interface CacheData {
  data: any;
  timestamp: number;
  images?: { [url: string]: Blob };
}

class IndexedDBCache {
  private dbName = 'john-white-music-cache';
  private dbVersion = 1;
  private storeName = 'music-data';
  private imageStoreName = 'cover-art';

  private async openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        // Create object stores
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'key' });
        }
        
        if (!db.objectStoreNames.contains(this.imageStoreName)) {
          db.createObjectStore(this.imageStoreName, { keyPath: 'url' });
        }
      };
    });
  }

  async setData(key: string, data: any, cacheDuration: number = 30 * 60 * 1000): Promise<void> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      
      const cacheData: CacheData = {
        data,
        timestamp: Date.now(),
      };
      
      await new Promise<void>((resolve, reject) => {
        const request = store.put({ key, ...cacheData });
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
      
      db.close();
    } catch (error) {
      console.error('Error caching data:', error);
    }
  }

  async getData(key: string, cacheDuration: number = 30 * 60 * 1000): Promise<any> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      
      const result = await new Promise<any>((resolve, reject) => {
        const request = store.get(key);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      
      db.close();
      
      if (result) {
        const isExpired = Date.now() - result.timestamp > cacheDuration;
        if (!isExpired) {
          return result.data;
        } else {
          // Clean up expired data
          this.deleteData(key);
        }
      }
      
      return null;
    } catch (error) {
      console.error('Error retrieving cached data:', error);
      return null;
    }
  }

  async cacheImage(url: string): Promise<string | null> {
    try {
      // Check if image is already cached
      const cachedImage = await this.getCachedImage(url);
      if (cachedImage) {
        return cachedImage;
      }

      // Fetch and cache the image
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch image: ${response.status}`);
      
      const blob = await response.blob();
      
      const db = await this.openDB();
      const transaction = db.transaction([this.imageStoreName], 'readwrite');
      const store = transaction.objectStore(this.imageStoreName);
      
      await new Promise<void>((resolve, reject) => {
        const request = store.put({ url, blob, timestamp: Date.now() });
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
      
      db.close();
      
      // Return object URL for immediate use
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error caching image:', error);
      return url; // Fallback to original URL
    }
  }

  async getCachedImage(url: string): Promise<string | null> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction([this.imageStoreName], 'readonly');
      const store = transaction.objectStore(this.imageStoreName);
      
      const result = await new Promise<any>((resolve, reject) => {
        const request = store.get(url);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      
      db.close();
      
      if (result?.blob) {
        return URL.createObjectURL(result.blob);
      }
      
      return null;
    } catch (error) {
      console.error('Error retrieving cached image:', error);
      return null;
    }
  }

  async deleteData(key: string): Promise<void> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      
      await new Promise<void>((resolve, reject) => {
        const request = store.delete(key);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
      
      db.close();
    } catch (error) {
      console.error('Error deleting cached data:', error);
    }
  }

  async clearAll(): Promise<void> {
    try {
      const db = await this.openDB();
      const transaction = db.transaction([this.storeName, this.imageStoreName], 'readwrite');
      
      await Promise.all([
        new Promise<void>((resolve, reject) => {
          const request = transaction.objectStore(this.storeName).clear();
          request.onsuccess = () => resolve();
          request.onerror = () => reject(request.error);
        }),
        new Promise<void>((resolve, reject) => {
          const request = transaction.objectStore(this.imageStoreName).clear();
          request.onsuccess = () => resolve();
          request.onerror = () => reject(request.error);
        })
      ]);
      
      db.close();
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }
}

export const musicCache = new IndexedDBCache();