import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { HomeHeader } from "../components/Header";
import CategoryComponent from "../components/CategoryComponent";
import NewsList from "../components/NewsListComponent";
import LoadMore from "../components/LoadMoreComponent";

const API_KEY = "aebb34e56a014dafb036da63442d3e79";
const PAGESIZE = 5;

export default function HomePage() {
  const [news, setNews] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [pagination, setPagination] = React.useState({
    page: 1,
    pageSize: PAGESIZE,
  });

  React.useEffect(() => {
    getNews();
    handleResetPagination();
  }, [query, category]);

  const getNews = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${query}&country=us&category=${category}&page=1&pageSize=${PAGESIZE}&apiKey=${API_KEY}`
    );
    const result = await data.json();
    if (result.status === "ok") {
      setNews(result.articles);
      setTotal(result.totalResults);
    } else {
      console.log("Error");
      setNews([]);
    }
  };

  const getNewsWithPagination = async (params) => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${query}&country=us&category=${category}&page=${params.page}&pageSize=${params.pageSize}&apiKey=${API_KEY}`
    );
    const result = await data.json();
    if (result.status === "ok") {
      setNews([...news, ...result.articles]);
      setTotal(result.totalResults);
    }
  };

  const handlePageChange = (data) => {
    getNewsWithPagination(data);
    setPagination(data);
  };

  const handleResetPagination = () => {
    setPagination({ page: 1, pageSize: PAGESIZE });
  };

  return (
    <>
      <CssBaseline />
      <HomeHeader query={query} setQuery={setQuery} />
      <main>
        <CategoryComponent setCategory={setCategory} />
        <NewsList news={news} />
        {news.length < total && (
          <LoadMore pagination={pagination} setPagination={handlePageChange} />
        )}
      </main>
    </>
  );
}
