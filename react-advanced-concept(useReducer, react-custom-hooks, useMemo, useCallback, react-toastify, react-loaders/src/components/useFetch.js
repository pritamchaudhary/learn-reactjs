import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const call = await fetch(url);

      const res = await call.json();
      setData(res);
    }
    getData();
  }, []);

  return [data];
};

export default useFetch;
