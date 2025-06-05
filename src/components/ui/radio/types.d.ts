declare namespace Components.ui {
  type radio = Required<Pick<HTMLInputProps, 'onChange'>> &
    Pick<HTMLInputProps, 'className' | 'checked'> &
    Pick<shared, 'name'> &
    Partial<Pick<shared, 'disabled'>> & {
      color?: 'theme' | 'danger' | 'success';
      variation?: 'basic';
      id?: string;
      size?: 'small' | 'medium';
      ref?: LegacyRef<HTMLInputElement> | undefined;
      value: string;
    };
}
