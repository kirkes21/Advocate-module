import React, { useEffect, useState } from "react";

import { fetchTopAuthors_24h } from "../api";

const Main = () => {
  const [topAuthors_24h, setTopAuthors_24h] = useState({});

  useEffect(() => {
    const getTopAuthors_24h = async () => {
      const fetchedAuthors = await fetchTopAuthors_24h();
      setTopAuthors_24h(fetchedAuthors.data);
    };
    getTopAuthors_24h();
  }, []);

  // const getTopAuthors_24h = async () => {
  //   const fetchedAuthors = await fetchTopAuthors_24h();
  //   return fetchedAuthors;
  // };

  console.log(topAuthors_24h);

  return (
    <div>
      <h1>Top Authors (last 24h)</h1>
      <div>
        {topAuthors_24h.map((author, i) => {
          return (
            <div key={i}>
              <h2>{author.author}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
