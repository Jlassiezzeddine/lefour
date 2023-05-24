import { buildImageUrl } from 'cloudinary-build-url';
import { useCallback, useEffect, useState } from 'react';
export default function useFetchImage(width: number = 0, height: number = 0) {
  const [innerWidth, setInnerWidth] = useState<number>(width);
  const [innerHeight, setInnerHeight] = useState<number>(height);

  useEffect(() => {
    if (width !== 0) {
      setInnerWidth(width);
    }
    if (height !== 0) {
      setInnerHeight(height);
    } else {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    }
  }, [height, innerHeight, innerWidth, width]);
  const fetchImage = useCallback(
    (imageName: string) => {
      return buildImageUrl(imageName, {
        cloud: {
          cloudName: 'dgvgmundv',
        },
        transformations: {
          resize: {
            type: 'fill',
            width: innerWidth,
            height: innerHeight,
          },
        },
      });
    },
    [innerHeight, innerWidth]
  );
  return fetchImage;
}
