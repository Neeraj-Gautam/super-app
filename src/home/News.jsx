import React, { useEffect, useMemo, useState } from "react";
import styles from "./news.module.css";
import fetchData from "../hooks/useGetNews";

const News = () => {
  const data = fetchData(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=5cfd10c33f5a4bf089e8988176dba17e"
  );

  const newNews = data.data;

  if (!newNews) {
    return null;
  }

  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <img src={newNews.urlToImage} alt="" />
        <div className={styles.title}>
          <p>{newNews.title}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        {newNews.content}
        <br />
        {newNews.description}
      </div>
    </div>
  );
};

export default News;
