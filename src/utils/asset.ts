// Vite rewrites asset URLs it can see at build time (imports, CSS, <img src> in HTML),
// but strings that live in data files are invisible to it. When the app is served from a
// sub-path (e.g. GitHub Pages project sites at /Blackout-Site/), those root-relative paths
// would resolve against the domain root and 404. These helpers prefix Vite's BASE_URL.

const BASE_URL = import.meta.env.BASE_URL;

export function asset(path: string): string {
  // Leave absolute URLs, protocol-relative URLs and browser-generated URLs untouched.
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return path;
  return `${BASE_URL.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}

/**
 * Recursively rewrites every root-relative string ("/sneaker_images/...") in a data
 * structure so it is served from the app's base path.
 */
export function resolveAssetPaths<T>(value: T): T {
  if (typeof value === 'string') {
    return (value.startsWith('/') && !value.startsWith('//') ? asset(value) : value) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((entry) => resolveAssetPaths(entry)) as unknown as T;
  }
  if (value !== null && typeof value === 'object') {
    const copy: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
      copy[key] = resolveAssetPaths(entry);
    }
    return copy as T;
  }
  return value;
}
