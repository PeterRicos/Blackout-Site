const DB_NAME = 'RandomStockVaultDB';
const STORE_NAME = 'HeroVideoStore';
const VIDEO_KEY = 'userHeroVideo';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveUserVideo(file: File): Promise<string> {
  try {
    const db = await openDB();
    const arrayBuffer = await file.arrayBuffer();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const putReq = store.put({ buffer: arrayBuffer, type: file.type }, VIDEO_KEY);
      putReq.onsuccess = () => {
        const blob = new Blob([arrayBuffer], { type: file.type });
        resolve(URL.createObjectURL(blob));
      };
      putReq.onerror = () => reject(putReq.error);
    });
  } catch (err) {
    console.warn('Could not cache video in IndexedDB:', err);
    return URL.createObjectURL(file);
  }
}

export async function getSavedUserVideo(): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const getReq = store.get(VIDEO_KEY);
      getReq.onsuccess = () => {
        if (getReq.result && getReq.result.buffer) {
          const blob = new Blob([getReq.result.buffer], { type: getReq.result.type || 'video/mp4' });
          resolve(URL.createObjectURL(blob));
        } else {
          resolve(null);
        }
      };
      getReq.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}
