declare namespace Components.ui {
  type badge = Pick<shared, 'children'> &
    Pick<Partial<shared>, 'dir'> & {
      color?:
        | 'info'
        | 'success'
        | 'warning'
        | 'danger'
        | 'gradientDanger'
        | 'gradientBase'
        | 'brown'
        | 'yellow';
      size?: 'xxSmall' | 'xSmall' | 'small' | 'medium' | 'large';
      className?: string;
    };
}
