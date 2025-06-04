declare namespace Components.ui {
  type input = Pick<
    HTMLInputProps,
    | 'type'
    | 'readOnly'
    | 'disabled'
    | 'onBlur'
    | 'onChange'
    | 'id'
    | 'autoFocus'
    | 'onKeyDown'
    | 'onKeyUp'
    | 'minLength'
    | 'maxLength'
    | 'inputMode'
  > &
    Pick<shared, 'name'> &
    Partial<
      Pick<
        shared,
        | 'label'
        | 'className'
        | 'placeholder'
        | 'value'
        | 'defaultValue'
        | 'prefix'
        | 'suffix'
        | 'helperText'
        | 'dir'
        | 'onPaste'
      >
    > & {
      size?: 'small' | 'medium' | 'large';
      color?: 'theme' | 'red' | 'success';
      variation?: 'basic';
      onchange?: () => void;
      classNameLabel?: string;
      classNamePrefix?: string;
      classNameInput?: string;
      classNameHelperText?: string;
      ref?: LegacyRef<HTMLInputElement>;
      dirContainer?: 'rtl' | 'ltr';
    };
}
