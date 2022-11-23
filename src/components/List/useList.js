import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

import { BASE_URL } from "../../lib/constants/constants";

export const useList = () => {
  const [cards, setCards] = useState([]);
  const [loadingCard, setLimit] = useState(100);
  // const [isEndCards, setIsEndCards] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(`${BASE_URL}/posts?page=8`, {});
    setCards(res.data.posts);
    setLoading(false);
  };
  const loader = useRef(null);

  const handleClickMobile = () => {
    if (!(loadingCard > cards.length)) {
      const scrolled = window.scrollY;
      setLimit((prev) => prev + 100);
      window.scrollTo(0, scrolled - 750);
    }
  };
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        setLimit((prev) => {
          return prev + 100;
        });
      }
    },
    [loading],
  );
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver, loadingCard]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(cards);
  return {
    handleClickMobile,
    loadingCard,
    loading,
    cards,
    loader,
  };
};
