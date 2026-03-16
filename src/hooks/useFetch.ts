import { useEffect, useState } from "react";

export default function useFetch<T>(url: string, options?: RequestInit) {

  const [state, setState] = useState<{
    error: Error | null;
    data: T | null;
    loading: boolean
  }>({
    data: null,
    loading: true,
    error: null
  });

  const fetchData = async () => {

    setState({ data: null, loading: true, error: null });

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      setState({ data: result, loading: false, error: null });

    } catch (err) {
      setState({
        data: null,
        loading: false,
        error: err as Error
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return state;
}