export const extractTokenPayload = (token: string) => JSON.parse(atob(token.split('.')[1]));

export const copyToClipBoard = (text: string) => navigator.clipboard.writeText(text);

export const convertBlobToFile = (blob: Blob, fileName?: string) => {
  return new File([blob], fileName || Math.random().toString(), {
    type: blob.type,
    lastModified: Date.now()
  });
};

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled;
}

export const isTokenExpired = (token: string) => {
  const now = Math.floor(Date.now() / 1000);
  const payload = extractTokenPayload(token);

  if (!payload.exp) throw new Error('token is invalid');

  return payload.exp - 2 < now;
};

export function memoize<T extends (...args: any[]) => any>(fn: T, key: string): T {
  const cache: Map<string, any> = new Map();

  return function (...args: any[]) {
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  } as T;
}

export const detectPlatform = () => {
  const userAgent = navigator.userAgent;

  if (/iPhone|iPad|iPod|Mac|Macintosh/i.test(userAgent)) {
    return {
      isIOS: true,
      isAndroid: false
    };
  }

  if (/Android/i.test(userAgent)) {
    return {
      isIOS: false,
      isAndroid: true
    };
  }

  return {
    isIOS: false,
    isAndroid: false
  };
};

export function isExternalReferrer(): boolean {
  if (typeof window === 'undefined') return false;

  const referrer = document.referrer;

  if (!referrer) return true;

  const isInternal = referrer.includes(window.location.hostname);

  return !isInternal;
}
