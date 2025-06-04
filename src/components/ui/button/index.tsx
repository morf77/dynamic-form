import { twMerge } from 'tailwind-merge';
import AnimatedSpinner from '../loaders/spinner';
import buttonBasic from './styles';

const Button: FC<Components.ui.button> = ({
  className,
  contentClassName,
  isLoading,
  type = 'button',
  variation = 'basic',
  size = 'medium',
  color,
  children,
  disabled,
  isActive,
  ...props
}) => {
  // using variation with below approach to separate variations completely

  // generic of variation schema
  const variants = twMerge(
    twMerge(
      buttonBasic.styleButton({ size, color, disabled, isLoading }),
      isActive ? buttonBasic.styleButtonActive({ color }) : ''
    ),
    className
  );

  const variantsLoading = buttonBasic.styleButtonLoading({ color });

  return (
    <button type={type} className={variants} {...props}>
      <div
        className={`flex items-center justify-center h-full w-full ${twMerge(isLoading ? 'opacity-0' : '', contentClassName)}`}
      >
        {children}
      </div>

      {isLoading && <AnimatedSpinner className={variantsLoading} />}
    </button>
  );
};

export default Button;
