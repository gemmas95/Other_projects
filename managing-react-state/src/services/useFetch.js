import { useState, useRef, useEffect } from "react";
// All react hooks MUST starts with use
// A Hooks is a JS fn with a few extra rules

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  //isMounted avoid us the error when we navigate to another component when there has not an unmounted component
  const isMounted = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    // WITH ASYNC/AWAIT
    // This next syntaxis functionally does the same that the immediately async inkve fn
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          if (isMounted.current) setData(json);
        } else {
          throw response;
        }
      } catch (err) {
        if (isMounted.current) setError(err);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }
    init();
    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { data, error, loading };
}

export function Fetch({ url, children }) {
  const { data, loading, error } = useFetch(url);
  return children(data, loading, error);
}
