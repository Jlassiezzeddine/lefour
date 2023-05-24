import { SxProps, Theme } from '@mui/material/styles';
import { useRef } from 'react';
import useScrollPosition from './useScrollPosition';

export default function useHorizontalTextAnimation(reverse: boolean = false) {
  const scrollPosition = useScrollPosition();
  const textRef = useRef<
    | HTMLParagraphElement
    | HTMLAnchorElement
    | HTMLDivElement
    | HTMLTitleElement
    | HTMLHeadingElement
  >(null);
  let translateValue: number = 0;
  if (textRef.current) {
    translateValue =
      (textRef.current.getBoundingClientRect().top - scrollPosition * 0.75) *
      0.5;
    if (reverse) {
      translateValue = translateValue * -1;
    }
  }

  const textAnimationStyle: SxProps<Theme> = {
    whiteSpace: 'nowrap',
    transform: `translateX(${translateValue}px)`,
    transition: 'transform .7s cubic-bezier(.25,1,.75,1)',
    transformStyle: 'preserve-3d',
  };
  return { textRef, textAnimationStyle };
}
