import Box from '@mui/material/Box';
import { useEffect } from 'react';
interface IProps {
  children: JSX.Element;
}
export default function SmoothScrollWrapper({ children }: IProps) {
  const smoothScroll = (target: any, speed: number, smooth: number) => {
    if (target.document === document)
      target =
        document.scrollingElement ||
        document.documentElement ||
        document.body.parentNode ||
        document.body; // cross browser support for document scrolling

    let moving = false;
    let pos = target.scrollTop;
    let frame =
      target === document.body && document.documentElement
        ? document.documentElement
        : target; // safari is the new IE

    target.addEventListener('wheel', scrolled, { passive: false });

    function scrolled(e: any) {
      e.preventDefault(); // disable default scrolling

      let delta = normalizeWheelDelta(e);

      pos += -delta * speed;
      pos = Math.max(
        smooth,
        Math.min(pos, target.scrollHeight - frame.clientHeight)
      ); // limit scrolling

      if (!moving) update();
    }

    function normalizeWheelDelta(e: any) {
      if (e.detail) {
        if (e.wheelDelta)
          return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
        // Opera
        else return -e.detail / 3; // Firefox
      } else return e.wheelDelta / 120; // IE,Safari,Chrome
    }

    function update() {
      moving = true;

      let delta = (pos - target.scrollTop) / smooth;

      target.scrollTop += delta;

      if (Math.abs(delta) > 0.1) requestFrame(update);
      else moving = false;
    }

    let requestFrame = (function () {
      // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    })();
  };
  useEffect(() => {
    smoothScroll(window, 120, 30);
    console.log(window);
  }, []);
  return <Box>{children}</Box>;
}
