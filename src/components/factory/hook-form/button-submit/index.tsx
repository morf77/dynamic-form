import { Controller, useFormContext } from 'react-hook-form';
import Button from '../../../ui/button';

const ControlledButtonSubmit: FC<Components.ui.button> = ({
  children,
  type = 'submit',
  ...props
}) => {
  const { disabled, ...restProps } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name="button"
      control={control}
      render={({ formState }) => (
        <Button disabled={!formState.isValid || disabled} type={type} {...restProps}>
          {children}
        </Button>
      )}
    />
  );
};

export default ControlledButtonSubmit;
