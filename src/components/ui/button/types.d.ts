declare namespace Components.ui {
  type button = Partial<
    Pick<shared, 'className' | 'isLoading' | 'name' | 'disabled' | 'isActive' | 'contentClassName'>
  > &
    Pick<shared, 'children'> & {
      type?: 'submit' | 'reset' | 'button' | undefined;
      // from styles file
      variation?: 'basic' | 'noStyle' | 'outline';
      color?:
        | 'gradientBase'
        | 'gradientDanger'
        | 'info'
        | 'success'
        | 'warning'
        | 'danger'
        | 'theme'
        | 'transparent';
      size?: 'xxSmall' | 'xSmall' | 'small' | 'medium' | 'large';
      onClick?: (e?: any) => void;
    };

  type link = Omit<button, 'type'> & import('react-router-dom').LinkProps;
}
