import { useEffect, useState } from 'react';

export default function useFetch(url, { options, transform, defaultVal } = {}) {
  const [state, setState] = useState(defaultVal);

  useEffect(() => {
    let mounted = true;

    async function performFetch() {
      try {
        const response = await fetch(url, options);
        let data = await response.json();
        if (transform) {
          data = transform(data);
        }

        if (mounted) {
          setState(data);
        }
      } catch (e) {
        // TODO: Handle error here.
      }
    }

    performFetch();

    return () => {
      mounted = false;
    };
  }, [url, options, transform]);

  return state;
}
