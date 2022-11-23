import { useEffect, useRef, useState } from "react";
import { useMobile } from "../../../../hooks/useMediaQuery";

export const useFullVisible = (handleClickOut) => {
  const wrapperRef = useRef(null);
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflowY = "hidden";
    }
    document.addEventListener("click", handleClick);

    return () => {
      if (isMobile) {
        document.body.style.overflowY = "scroll";
      }

      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);
  const handleClick = () => {
    if (isOpen) {
      console.log(typeof handleClickOut);
      console.log(handleClickOut);
      handleClickOut();
      setIsOpen(false);
    }
    setIsOpen(true);
  };

  return { wrapperRef };
};
