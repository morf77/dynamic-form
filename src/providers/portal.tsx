import { CSSProperties, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactNode;
  zIndex?: number;
  target?: 'root' | 'layout';
  onClosed?: () => void;
  onMount?: VoidFunction;
  className?: string;
  style?: CSSProperties | undefined;
}

const Portal: FC<PortalProps> = ({
  children,
  className,
  style,
  target = 'root',
  onMount,
  onClosed,
  zIndex = 20
}) => {
  const ref = useRef<Element | null>(null);

  const id = useId();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(`#${target}`);
    setMounted(true);
  }, []);

  useEffect(() => {
    mounted && onMount?.();
  }, [mounted]);

  return mounted && ref.current
    ? createPortal(
        <div
          className={className}
          style={{
            zIndex: zIndex,
            ...(style || null)
          }}
          onClick={e => {
            e.stopPropagation();
            onClosed?.();
          }}
        >
          {children}
        </div>,
        ref.current,
        id
      )
    : null;
};

export default Portal;
