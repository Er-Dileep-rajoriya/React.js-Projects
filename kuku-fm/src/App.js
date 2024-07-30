import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import Shows from "./components/Shows/Shows";
import Header from "./components/Header/Header";
import MovieCarousel from "./components/Carousel/Carousel";
import Top10 from "./components/Top10/Top10";
import SkeletonLoader from "./components/Skeleton/Skeleton";
import TopPicks from "./components/Top_Picks/TopPicks";

function App() {
  const [ShowData, setShowData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [top10, setTop10] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=${page}&lang=engli`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      const newItems = result.items.filter(
        (_, index) => (index >= 4 && page === 1) || (index >= 1 && page === 2)
      );

      if (newItems.length === 0) {
        setHasMore(false);
      }

      setTimeout(() => {
        setShowData((prevData) => [...prevData, ...newItems]);
        if (page === 1) {
          setSliderData(result.items[0].banners);
          setTopPicks(result.items[1].mixed_items);
          setTop10(result.items[3].mixed_content_items);
        }
        setLoading(false);
      }, 1000); // 1-second delay for demo purposes
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    if (hasMore) {
      fetchData();
    }
  }, [fetchData, hasMore]);

  const lastShowElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <Header />
      {loading && page === 1 ? (
        <>
          <SkeletonLoader
            count={1}
            style={{ height: "300px", width: "100%" }}
          />
          <SkeletonLoader
            count={10}
            style={{ height: "100px", width: "100%" }}
          />
        </>
      ) : (
        <>
          <MovieCarousel sliderData={sliderData} />
          <TopPicks topPicks={topPicks} />
          <Top10 top10={top10} />
          {ShowData.map((data, index) => {
            if (index === ShowData.length - 1) {
              return <Shows ref={lastShowElementRef} data={data} key={index} />;
            } else {
              return <Shows data={data} key={index} />;
            }
          })}
        </>
      )}
      {loading && page > 1 && (
        <SkeletonLoader count={10} style={{ height: "100px", width: "100%" }} />
      )}
    </>
  );
}

export default App;
