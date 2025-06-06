import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import Checkbox from '../../../ui/checkbox';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ControlledCheckBox: FC<
  Pick<
    Components.ui.checkbox,
    'name' | 'color' | 'variation' | 'value' | 'checked' | 'size' | 'className'
  > &
    Pick<RegisterOptions, 'required'> &
    Partial<Pick<Components.ui.checkbox, 'onChange'>> & {
      connectedToURL?: boolean;
    }
> = ({ name, onChange, color, value, required, checked, connectedToURL = true, ...props }) => {
  const navigate = useNavigate();

  const { control, setValue, trigger } = useFormContext();

  useEffect(() => {
    if (connectedToURL) {
      const params = new URLSearchParams(location.search);
      const urlValue = params.get(name);
      if (urlValue?.length) {
        setValue(name, urlValue);
      }
    }
  }, [name]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={checked ? value : ''}
      rules={{ required }}
      render={({ field, fieldState }) => {
        let selectedItems = (field.value as string)?.toString()?.split(',');

        if (selectedItems.length === 1 && !selectedItems[0].length) selectedItems = [];

        const isSelected = selectedItems.some(item => item.toString() === value.toString());

        return (
          <Checkbox
            {...props}
            name={field.name}
            checked={isSelected}
            onChange={() => {
              const params = new URLSearchParams(location.search);

              const currentValue = params.get(name);

              if (isSelected) {
                const filteredValue = selectedItems
                  .filter(item => item.toString() !== value.toString())
                  .join(',');

                setValue(name, filteredValue);
                filteredValue.length ? params.set(name, filteredValue) : params.delete(name);
              } else {
                const addedValue = selectedItems.concat([value]).join(',');

                setValue(name, addedValue);
                params.set(name, addedValue);
              }

              navigate({ search: params.toString() }, { replace: true });
              trigger(name);
            }}
            value={value}
            color={fieldState.error ? 'danger' : color}
          />
        );
      }}
    />
  );
};

export default ControlledCheckBox;
