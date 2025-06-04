import { useEffect, useRef, useState } from 'react';

const useHandleCloseOpenOnTouch = ({
  touchLimit,
  handler,
  resetDependencies
}: {
  touchLimit: number;
  handler: () => void;
  resetDependencies: Array<unknown>;
}) => {
  const [translateY, setTranslateY] = useState(0);

  const startY = useRef<number | null>(null);

  const handleStart = (y: number) => {
    startY.current = y;
  };

  const handleMove = (y: number) => {
    if (startY.current !== null) {
      const deltaY = y - startY.current;
      if (deltaY > 0) {
        setTranslateY(deltaY);
      }
    }
  };

  const handleEnd = () => {
    const closeThreshold = touchLimit * 0.3;

    if (translateY > closeThreshold) {
      handler();
    } else {
      setTranslateY(0);
    }
    startY.current = null;
  };

  // Touch Event Handlers
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientY);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientY);
  const onTouchEnd = () => handleEnd();

  // Mouse Event Handlers
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientY);
  // const handleMouseMove = (e: MouseEvent) => handleMove(e.clientY);
  // const handleMouseUp = () => handleEnd();

  // useEffect(() => {
  //   if (startY.current !== null) {
  //     window.addEventListener('mousemove', handleMouseMove);
  //     window.addEventListener('mouseup', handleMouseUp);
  //   } else {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('mouseup', handleMouseUp);
  //   }
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('mouseup', handleMouseUp);
  //   };
  // }, [startY.current]);

  useEffect(() => {
    setTranslateY(0);
  }, [...resetDependencies]);
  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown
  };
};

export default useHandleCloseOpenOnTouch;
