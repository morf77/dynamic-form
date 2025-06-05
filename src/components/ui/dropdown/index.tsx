import { useImperativeHandle, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import dropdownBasic from './styles';
import useClickOutside from '../../../hooks/use-click-outside';

const Dropdown: FC<Components.ui.dropdown> = ({
  children,
  placement = 'bottom',
  button,
  variation = 'basic',
  ref: parentRef,
  isFit = false,
  color = 'theme',
  closeOnInsideClick = true,
  setIsOpen,
  disabled,
  classNameContainer,
  className
}) => {
  // opening and closing handling ----------------------------------------------------------------------------
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  });
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const open = () => {
    setDimensions({
      height: dropdownRef.current?.clientHeight || 0,
      width: dropdownRef.current?.clientWidth || 0
    });

    setIsOpen?.(true);
  };

  const close = () => {
    setDimensions(state => ({
      ...state,
      ...(placement === 'top' || placement === 'bottom' ? { height: 0 } : { width: 0 })
    }));
    setIsOpen?.(false);
  };
  const toggleDropdown = () => {
    if (!disabled)
      !(dimensions.height && dimensions.width) ? open() : closeOnInsideClick && close();
  };

  useImperativeHandle(parentRef, () => ({
    openDropdown: open,
    closeDropdown: close
  }));

  const ref = useClickOutside({
    isOpen: !!dimensions.width || !!dimensions.height,
    onClose: close
  });

  const animatedStyle = {
    bottom: {
      height: dimensions.height,
      top: ref.current?.clientHeight,
      // right: -((ref.current?.clientWidth || 0) - dimensions.width) / 2,
      left: ((ref.current?.clientWidth || 0) - dimensions.width) / 2
    },
    top: {
      height: dimensions.height,
      bottom: ref.current?.clientHeight,
      right: ((ref.current?.clientWidth || 0) - dimensions.width) / 2
      // left: -((ref.current?.clientWidth || 0) - dimensions.width) / 2
    },
    left: {
      width: dimensions.width,
      right: ref.current?.clientWidth,
      // top: 0,
      bottom: ((ref.current?.clientHeight || 0) - dimensions.height) / 2
    },
    right: {
      width: dimensions.width,
      left: ref.current?.clientWidth,
      // bottom: -((ref.current?.clientHeight || 0) - dimensions.height) / 2,
      top: ((ref.current?.clientHeight || 0) - dimensions.height) / 2
    }
  };

  const isVertical = placement === 'top' || placement === 'bottom';

  // styling -------------------------------------------------------------------------------------------------
  type collection = Components.ui.variantsCollection<Components.ui.dropdown>;

  const variantsContainer: collection = {
    basic: () => twMerge(dropdownBasic.styleDropdownContainer(), classNameContainer)
  };

  const variants: collection = {
    basic: () => twMerge(dropdownBasic.styleDropdown({ color, isFit, isVertical }), className)
  };

  // return JSX ----------------------------------------------------------------------------------------------
  return (
    <div className={variantsContainer[variation]()} ref={ref}>
      <div className="w-full h-full bg-transparent z-10" onClick={toggleDropdown}>
        {button}
      </div>
      <div className={variants[variation]()} style={animatedStyle[placement]}>
        <div
          className={`${isFit ? (isVertical ? 'w-full' : 'h-full') : ''} min-w-fit min-h-fit`}
          ref={dropdownRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
