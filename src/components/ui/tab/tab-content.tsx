import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import useTab from './use-tab';

const TabContent: FC<{
  className?: string;
  calcDimensions?: boolean;
}> = ({ className, calcDimensions = true }) => {
  const { changing, lastTab } = useTab();

  const ref = useRef<HTMLDivElement | null>(null);

  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    {
      ref.current &&
        setDimensions({ height: ref.current!.clientHeight, width: ref.current!.clientWidth });
    }
  }, [changing]);

  return (
    <div
      className={twMerge(`transition-all ${changing ? ' opacity-0' : ' opacity-100'}`, className)}
      {...(calcDimensions
        ? {
            style: {
              height: dimensions.height,
              minWidth: dimensions.width
            }
          }
        : {})}
    >
      {calcDimensions ? (
        <div ref={ref}>{lastTab?.content?.() as ReactNode}</div>
      ) : (
        (lastTab?.content?.() as ReactNode)
      )}
    </div>
  );
};

export default TabContent;
