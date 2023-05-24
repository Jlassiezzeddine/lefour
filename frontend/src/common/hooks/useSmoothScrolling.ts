import { useEffect, useRef } from 'react';
import { useWindowSize } from 'usehooks-ts';

export default function useSmoothScrolling() {
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);

  // Run scrollrender once page is loaded.
  useEffect(() => {
    // Configs
    const data = {
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0,
    };
    // Scrolling
    const skewScrolling = () => {
      if (scrollContainer.current) {
        //Set Current to the scroll position amount
        data.current = window.scrollY;
        // Set Previous to the scroll previous position
        data.previous += (data.current - data.previous) * data.ease;
        // Set rounded to
        data.rounded = Math.round(data.previous * 100) / 100;

        // Difference between
        // const difference = data.current - data.rounded;
        // const acceleration = difference / size.width;
        // const velocity = +acceleration;
        // const skew = velocity * 7.5;

        //Assign skew and smooth scrolling to the scroll container
        scrollContainer.current.style.transform = `translateY(-${data.rounded}px) `;
        // scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

        //loop vai raf
        requestAnimationFrame(() => skewScrolling());
      }
    };
    requestAnimationFrame(() => skewScrolling());
  }, [size.width]);
  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    if (scrollContainer.current) {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
  };
  return { app, scrollContainer };
}
