import React, { useState } from "react";
import { useEffect } from "react";

const baseUrl = "https://www.themealdb.com/api/json/v1/1";
const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //   console.log(data?.meals.map((res) => res));

  useEffect(() => {
    const FetchApiData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}${url}`);
        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    FetchApiData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
