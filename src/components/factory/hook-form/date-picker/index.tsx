import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import DatePickerJalali from '../../date-picker';
import { IDatePickerJalali } from '../../date-picker/types';
import { useState } from 'react';

const ControlledDatePicker: FC<
  IDatePickerJalali &
    RegisterOptions & {
      formatPattern?: 'YYYY/MM/DD';
    }
> = props => {
  const {
    name,
    helperText,
    label,
    prefix,
    className,
    size,
    disabled,
    formatPattern = 'YYYY/MM/DD',
    defaultValue = new Date('2000-01-01'),
    ...registerOptions
  } = props;

  const [firstBlur, setFirstBlur] = useState<boolean>(false);

  const { control, trigger, watch } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        disabled={disabled}
        rules={{ ...registerOptions }}
        defaultValue={defaultValue || ''}
        render={({ field, formState }) => {
          const error = formState.errors[name];

          const firstBlurOrHasError = firstBlur || (!firstBlur && error);

          return (
            <DatePickerJalali
              disabled={field.disabled}
              label={label}
              color={
                error ? 'red' : firstBlurOrHasError && !!watch(name)?.length ? 'success' : 'theme'
              }
              size={size}
              helperText={error ? helperText : null}
              ref={field.ref}
              className={className}
              prefix={prefix}
              value={field.value}
              name={field.name}
              onBlur={field.onBlur}
              onChange={date => {
                field?.onChange(date?.format(formatPattern));
                setFirstBlur(true);
                trigger(name);
              }}
            />
          );
        }}
      />
    </>
  );
};

export default ControlledDatePicker;
