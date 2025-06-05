import { useEffect, useState } from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import Select from '../../select';
import { useNavigate } from 'react-router-dom';

export type ControlledSelectProps = Omit<Components.factory.select, 'onChange'> &
  Partial<Pick<Components.factory.select, 'onChange'>> &
  RegisterOptions & {
    connectedToURL?: boolean;
  };

const ControlledSelect: FC<ControlledSelectProps> = props => {
  const {
    name,
    helperText,
    label,
    prefix,
    className,
    disabled,
    list,
    // onChange,
    classNameListContainer,
    classNameListItem,
    defaultValue,
    color,
    size,
    placeholder,
    suffix,
    connectedToURL = true,
    classNameLabel,
    classNameHelperText,
    isLoading,
    ...registerOptions
  } = props;

  const [firstBlur, setFirstBlur] = useState(false);

  const { control, trigger, watch, setValue } = useFormContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (connectedToURL) {
      const params = new URLSearchParams(location.search);
      const urlValue = params.get(name);
      if (urlValue && list.some(item => item.value === urlValue)) {
        setValue(name, urlValue);
      }
    }
  }, [name]);

  useEffect(() => {
    if (connectedToURL) {
      const subscription = watch((values, { name: changedName }) => {
        if (changedName === name) {
          const params = new URLSearchParams(location.search);
          const newValue = values[name];
          if (newValue) {
            newValue !== params.get(name) && params.set(name, newValue);
          } else {
            params.delete(name);
          }
          navigate({ search: params.toString() }, { replace: true });
        }
      });
      return () => subscription.unsubscribe();
    }
  }, [name]);

  return (
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
          <Select
            name={field.name}
            list={list}
            color={
              error ? 'red' : firstBlurOrHasError && !!watch(name)?.length ? 'success' : 'theme'
            }
            suffix={suffix}
            classNameListContainer={classNameListContainer}
            classNameListItem={classNameListItem}
            label={label}
            disabled={disabled || !list.length}
            classNameLabel={classNameLabel}
            size={size}
            isLoading={isLoading}
            helperText={error ? helperText : null}
            ref={field.ref}
            classNameHelperText={classNameHelperText}
            value={list.find(item => item.value === field.value)?.value}
            onBlur={field.onBlur}
            onChange={value => {
              field.onChange(value);
              setFirstBlur(true);
              trigger(name);
            }}
          />
        );
      }}
    />
  );
};

export default ControlledSelect;
