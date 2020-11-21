import { useEffect, RefObject } from 'react';

const useClickOutside = (refs: RefObject<HTMLDivElement>[], handler: () => void) => {
  useEffect(
    () => {
      const listener = ({ target }) => {
        let isOutSide = true;
        refs.some(({ current }) => {
          if (!current || current.contains(target)) {
            isOutSide = false;

            return true;
          }
        });

        if (isOutSide) handler();
      };

      document.addEventListener('mousedown', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [handler, refs]
  );
}

export default useClickOutside;
