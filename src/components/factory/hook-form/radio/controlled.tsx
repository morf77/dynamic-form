import { Controller, RegisterOptions, useFormContext, useWatch } from 'react-hook-form';
import Radio from '../../../ui/radio';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ControlledRadio: FC<
  Pick<
    Components.ui.checkbox,
    'name' | 'color' | 'variation' | 'value' | 'checked' | 'size' | 'className'
  > &
    Pick<RegisterOptions, 'required'> &
    Partial<Pick<Components.ui.checkbox, 'onChange'>> & {
      connectedToURL?: boolean;
    }
> = ({ name, onChange, connectedToURL = true, color, value, required, checked, ...props }) => {
  const navigate = useNavigate();

  const { control, setValue, watch } = useFormContext();

  const fieldValue = useWatch({ name });

  useEffect(() => {
    if (connectedToURL) {
      const params = new URLSearchParams(location.search);
      const urlValue = params.get(name);
      if (urlValue && urlValue === value) {
        setValue(name, urlValue);
      }
    }
  }, [name]);

  useEffect(() => {
    if (connectedToURL) {
      const subscription = watch((values, { name: changedName }) => {
        const newValue = values[name];
        if (changedName === name && (newValue === value || !newValue)) {
          const params = new URLSearchParams(location.search);
          if (newValue) {
            newValue !== params.get(name) && params.set(name, newValue);
          } else {
            params.delete(name);
          }
          navigate({ search: params.toString() }, { replace: true });
        }
      });
      return () => {
        subscription.unsubscribe();
      };
    }
  }, [name]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={checked ? value : ''}
      rules={{ required }}
      render={({ field, fieldState }) => {
        const isSelected = value === fieldValue;

        return (
          <Radio
            {...props}
            name={field.name}
            checked={isSelected}
            onChange={() => {
              isSelected ? null : setValue(name, value);
            }}
            value={value}
            color={fieldState.error ? 'danger' : color}
            // ref={field.ref}
          />
        );
      }}
    />
  );
};

export default ControlledRadio;
