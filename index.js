import { useEffect, useRef, useState } from "react";
import { debounce } from "debounce";

function determinateScrollDistance(slider,  {amount, hasPadding}) {
  const childIndex = hasPadding ? 1 : 0;
  
  // `amount` determinate the amount of pixels to scroll, but with a specific behavior:
  // - If `amount` is 0, it will scroll the width of the slider.
  // - If `amount` is not defined, it will scroll the width of the first child.
  // - If `amount` is defined, it will scroll the amount of pixels specified.
  if (amount === 0) return slider.offsetWidth;
  
  if (!amount) return slider.children[childIndex].offsetWidth

  return amount;
}
  

function useSlider({ hasPadding = false } = {}) {
  const sliderRef = useRef(null);
  const [scrollStatus, setScrollStatus] = useState(null);

  const scrollTo = (direction, {
    amount
  }) => () => {
    const slider = sliderRef.current;

    slider.scrollBy({
      left: 
        direction === "left"
          ? -determinateScrollDistance(slider, {amount, hasPadding})
          : determinateScrollDistance(slider, {amount, hasPadding}),
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