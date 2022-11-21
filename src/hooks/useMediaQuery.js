import { useEffect, useState } from "react";
const useMediaQuery = (query) => {
  const getMatches = (query) => {
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(false);

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
};

export const useDesktop = () => useMediaQuery("(max-width: 1024px)");

export const useTablet = () => useMediaQuery("(max-width: 996px)");

export const useMobile = () => useMediaQuery("(max-width: 600px)");

export default useMediaQuery;
