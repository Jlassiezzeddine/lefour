import { useEffect, useState } from 'react';

const useIsScrolledDown = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // function to run on scroll
    const update = () => {
      const scrollY = window.pageYOffset > 0;
      setIsScrolled(scrollY);
    };
    window.addEventListener('scroll', update); // add event listener
    return () => {
      window.removeEventListener('scroll', update); // clean up
    };
  }, [isScrolled]);
  return isScrolled;
};

export default useIsScrolledDown;
