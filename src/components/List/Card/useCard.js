import { useState } from "react";
import { useMobile } from "../../../hooks/useMediaQuery";

export const useCard = () => {
  const [isShow, setIsShow] = useState(false);
  const isMobile = useMobile();

  const handleShowFull = () => {
    setIsShow((prev) => !prev);
  };
  const handleClickOut = () => {
    setIsShow(false);
    document.body.style.overflowY = "scroll";
  };
  return { isShow, isMobile, handleShowFull, handleClickOut };
};
