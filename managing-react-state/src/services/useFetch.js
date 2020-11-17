import { useState, useEffect } from "react";
// All react hooks MUST starts with use
// A Hooks is a JS fn with a few extra rules

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // WITH ASYNC/AWAIT
    // This next syntaxis functionally does the same that the immediately async inkve fn
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  return { data, error, loading };
}
