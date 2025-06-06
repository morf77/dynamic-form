import { twMerge } from 'tailwind-merge';
import AnimatedSpinner from '../loaders/spinner';
import buttonBasic from './styles';

import { Link as RouterLink } from 'react-router-dom';

const Link: FC<Components.ui.link> = ({
  className,
  contentClassName,
  isLoading,
  variation = 'basic',
  size = 'medium',
  color,
  children,
  disabled,
  isActive,
  ...props
}) => {
  const styles = twMerge(
    twMerge(
      buttonBasic.styleButton({ size, color, disabled, isLoading }),
      isActive ? buttonBasic.styleButtonActive({ color }) : ''
    ),
    className
  );

  const stylesLoading = buttonBasic.styleButtonLoading({ color });
  return (
    <RouterLink {...props} className={styles}>
      <div
        className={`flex items-center justify-center h-full w-full ${twMerge(isLoading ? 'opacity-0' : '', contentClassName)}`}
      >
        {children}
      </div>

      {isLoading && <AnimatedSpinner className={stylesLoading} />}
    </RouterLink>
  );
};

export default Link;
