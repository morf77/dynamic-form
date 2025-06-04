// this name space declared to have a structured type system for components
// use this props long as possible and DO NOT Define custom props
// this is useful cause with this all of components accept same type and development experience will be better

declare namespace Components {
  namespace ui {
    interface shared {
      placeholder: string;
      name: string;
      label: ReactNode;
      title: ReactNode;
      isLoading: boolean;
      isActive: boolean;
      children: ReactNode;
      value: string | number;
      defaultValue: string | number;
      prefix: ReactNode | (() => ReactNode);
      suffix: ReactNode | (() => ReactNode);
      helperText: ReactNode;
      dir: 'ltr' | 'rtl';
      placement: 'right' | 'left' | 'top' | 'bottom' | 'center';
      isOpen: boolean;
      duration: number;
      disabled: boolean;
      icon: ReactNode;
      className: string;
      classNameWrapper: string;
      classNameContainer: string;
      classNameTitle: string;
      contentClassName: string;
      isOpen: boolean;
      onClose: VoidFunction;
      zIndex: number;
      isFetching: boolean;
      onPaste: (event: any) => void;
      video: video;
      hidden: boolean;
    }
    interface video {
      size: number;
      url: string;
      file: File;
    }

    type variantsCollection<T> = Record<Required<T>['variation'], () => string>;
  }
}
