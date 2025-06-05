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
        <Button
          onClick={() => {
            console.log('clicked');
          }}
          disabled={!formState.isValid || disabled}
          type={type}
          {...restProps}
        >
          {(() => {
            console.log('Button render', formState.isValid, disabled);
            return '';
          })()}
          {children}
        </Button>
      )}
    />
  );
};

export default ControlledButtonSubmit;
