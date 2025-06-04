declare namespace Components.ui {
  type checkbox = Required<Pick<HTMLInputProps, 'onChange'>> &
    Pick<HTMLInputProps, 'className' | 'checked'> &
    Pick<shared, 'name'> &
    Partial<Pick<shared, 'disabled'>> & {
      color?: 'theme' | 'danger' | 'success';
      variation?: 'basic';
      size?: 'small' | 'medium';
      ref?: LegacyRef<HTMLInputElement> | undefined;
      value: string;
    };
}
