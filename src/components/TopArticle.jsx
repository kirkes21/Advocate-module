import React, { useState, useEffect } from "react";
import { fetchArticle } from "../api";

const TopArticle = (author) => {
  const [article, setArticle] = useState([]);

  const removeSpaces = (authorSpaces) => {
    const authorStr = authorSpaces.author;

    return authorStr.replace(" ", "%20");
  };

  useEffect(() => {
    const authorNoSpaces = removeSpaces(author);

    const getArticle = async () => {
      const fetchedArticle = await fetchArticle(authorNoSpaces);
      setArticle(fetchedArticle.data[0]);
    };
    getArticle();
  }, [author]);

  return (
    <div>
      <img src={article.image_url} width="300px" />
      <h4>
        <a href={article.url} target="_blank">
          {article.title}
        </a>
      </h4>
    </div>
  );
};

export default TopArticle;
