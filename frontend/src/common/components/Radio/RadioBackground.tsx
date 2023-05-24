import Image from 'next/image';
import { useEffect, useState } from 'react';
import useFetchImage from 'src/common/hooks/useFetchImage';

export default function RadioBackground() {
  const [imageId, setImageId] = useState<number>(1);
  useEffect(() => {
    const images = [1, 2, 3, 4, 5];
    const interval = setInterval(() => {
      setImageId(images[Math.floor(Math.random() * images.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const fetchImage = useFetchImage();

  return (
    <Image
      src={fetchImage(`${imageId}`)}
      alt=""
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  );
}
