import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(url);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setLoading(false);
      setData(result);
      console.log("result===>", result);
    };
    fetchData();
  }, [url]);

  return { data, loading };
};
