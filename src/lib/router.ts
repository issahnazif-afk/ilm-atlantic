import { useEffect, useState } from 'react';

// Hash routing keeps the prototype deployable on GitHub Pages without server rewrites.
export function useRoute(): string[] {
  const get = () => (location.hash.replace(/^#\/?/, '').split('?')[0] || '').split('/').filter(Boolean).map(decodeURIComponent);
  const [parts, setParts] = useState(get);
  useEffect(() => {
    const on = () => { setParts(get()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return parts;
}

export const go = (path: string) => { location.hash = '#/' + path.replace(/^\/+/, ''); };
export const href = (path: string) => '#/' + path.replace(/^\/+/, '');
