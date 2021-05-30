/* eslint-disable consistent-return */
import { useEffect } from 'react';

const useIntersectionObserver = ({
  root = null,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });
    if (!target) {
      return;
    }
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [target, root, rootMargin, onIntersect, threshold]);
};

export default useIntersectionObserver;
