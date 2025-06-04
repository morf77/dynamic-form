import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import Checkbox from '../../../ui/checkbox';

const ControlledCheckBox: FC<
  Pick<
    Components.ui.checkbox,
    'name' | 'color' | 'variation' | 'value' | 'checked' | 'size' | 'className'
  > &
    Pick<RegisterOptions, 'required'> &
    Partial<Pick<Components.ui.checkbox, 'onChange'>>
> = ({ name, onChange, color, value, required, checked, ...props }) => {
  const { control, setValue, trigger } = useFormContext();

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
              isSelected
                ? setValue(
                    name,
                    selectedItems.filter(item => item.toString() !== value.toString()).join(',')
                  )
                : setValue(name, selectedItems.concat([value]).join(','));

              trigger();
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

export default ControlledCheckBox;
