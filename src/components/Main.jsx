import React, { useState, useEffect } from "react";
import { fetchAuthors } from "../api";
import { TopArticle } from "../components";

const Main = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const getAuthors = async () => {
      const fetchedAuthors = await fetchAuthors();
      setAuthors(fetchedAuthors.data);
    };
    getAuthors();
  }, []);

  return (
    <div>
      {authors.map((author, i) => {
        return (
          <div key={`author-name${i}`}>
            <h3>{author.author}</h3>
            <TopArticle key={`TopArticle${i}`} author={author.author} />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
