declare namespace Components.ui {
  type toggler = Partial<Pick<shared, 'className'>> & {
    isChecked: boolean;
    onChange: VoidFunction;
  };
}
