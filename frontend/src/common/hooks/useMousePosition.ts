import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

export default function useMousePosition() {
  const { height, width } = useWindowSize();
  const [x, setX] = useState<number>(width / 2);
  const [y, setY] = useState<number>(height / 2);
  useEffect(() => {
    const update = (e: MouseEvent) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener('mousemove', update);

    return () => {
      window.removeEventListener('mousemove', update);
    };
  }, [setX, setY]);
  return [x, y];
}
