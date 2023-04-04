import { useEffect, useRef, useState } from "react";
import { debounce } from "debounce";

function useSlider({ hasPadding = false } = {}) {
  const sliderRef = useRef(null);
  const [scrollStatus, setScrollStatus] = useState(null);

  const scrollTo = (direction) => () => {
    const slider = sliderRef.current;
    const childIndex = hasPadding ? 1 : 0;
    slider.scrollBy({
      left:
        direction === "right"
          ? slider.children[childIndex].offsetWidth
          : -slider.children[childIndex].offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || slider.scrollWidth < slider.offsetWidth) return;
    setScrollStatus("left");

    const callback = debounce(
      ({ target: { scrollLeft, scrollWidth, offsetWidth } }) => {
        if (scrollLeft === 0) {
          setScrollStatus("left");
        } else if (scrollLeft - scrollWidth + offsetWidth === 0) {
          setScrollStatus("right");
        } else {
          setScrollStatus("center");
        }
      },
      10
    );
    slider.addEventListener("scroll", callback);
    return () => {
      if (!slider) return;
      slider.removeEventListener("scroll", callback);
    };
  }, [sliderRef]);

  const isOverflown = (element) =>
    element &&
    element.offsetLeft + element.offsetWidth > element.parentNode.offsetWidth;

  return {
    sliderRef,
    scrollTo,
    scrollStatus,
    isOverflown,
  };
}

export { useSlider };