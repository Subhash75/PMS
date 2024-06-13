/*
JS and React Based Media Query 
This function is throttled hence our resize fn will not after for each resize event
event subscription and unsubscribe to improve performance
*/

import { useEffect, useState, useRef } from "react";

function useResponsiveCondition(breakpoint: number, throttleInterval: number = 400) {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleWidthOnResize = () => {
    setCurrentWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleThrottledResize = () => {
      if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;
          handleWidthOnResize();
        }, throttleInterval);
      }
    };

    window.addEventListener("resize", handleThrottledResize);

    return () => {
      window.removeEventListener("resize", handleThrottledResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [throttleInterval]);

  return currentWidth >= breakpoint;
}

export default useResponsiveCondition;
