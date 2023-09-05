import { useState, useEffect } from 'react';


const useFetchJson = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setLoading(true);
    setError(null);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return data;
};

export default useFetchJson;
