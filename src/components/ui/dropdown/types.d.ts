declare namespace Components.ui {
  type dropdownRef = {
    closeDropdown: () => void;
    openDropdown: () => void;
  };

  type dropdown = Partial<Pick<shared, 'disabled' | 'classNameContainer'>> & {
    children: ReactNode;
    variation?: 'basic';
    button: ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    ref?: Ref<dropdownRef | undefined>;
    isFit?: boolean;
    color?: 'theme' | 'transparent';
    className?: string;
    setIsOpen?: Setter<boolean>;
    closeOnInsideClick?: boolean;
  };
}
