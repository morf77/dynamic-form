declare namespace Components.factory {
  type select = ui.input &
    Partial<Pick<shared, 'isLoading'>> &
    Pick<ui.dropdown, 'closeOnInsideClick' | 'classNameContainer'> & {
      list: Array<{
        value: shared['value'];
        label: string;
        listLabel?: ReactNode;
        isActive?: boolean;
        image?: string;
      }>;
      variation?: 'basic';
      classNameListContainer?: string;
      classNameListItem?: string;
      closeOnSelect?: boolean;
      onChange: (value: string | number | boolean) => void;
      onChangeInput?: input['onChange'];
      valueInput?: input['value'];
      ref?: LegacyRef<dropdownRef> | undefined;
    };
}
