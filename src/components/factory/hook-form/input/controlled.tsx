import { useState } from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import Input from '../../../ui/input';
import SkeletonFetchingLoading from '../../../ui/loaders/skeleton';

export type TControlledInputProps = RegisterOptions &
  Pick<
    Components.ui.input,
    | 'helperText'
    | 'label'
    | 'name'
    | 'prefix'
    | 'type'
    | 'readOnly'
    | 'value'
    | 'defaultValue'
    | 'ref'
    | 'disabled'
    | 'dir'
    | 'dirContainer'
    | 'className'
    | 'size'
    | 'suffix'
    | 'classNameLabel'
    | 'classNameHelperText'
    | 'inputMode'
  > & {
    trimmed?: boolean;
    formatter?: (value: string) => string;
    isLoading?: boolean;
    isFetching?: boolean;
    skeletonClassName?: string;
  };

const ControlledInput: FC<TControlledInputProps> = props => {
  const {
    name,
    helperText,
    label,
    prefix,
    type,
    readOnly,
    value,
    defaultValue,
    formatter,
    ref,
    disabled,
    size,
    trimmed,
    isFetching,
    isLoading,
    dir,
    dirContainer,
    skeletonClassName,
    className,
    suffix,
    classNameLabel,
    inputMode,
    classNameHelperText,
    ...registerOptions
  } = props;

  const [firstBlur, setFirstBlur] = useState<boolean>(false);

  const { trigger, control, watch } = useFormContext();

  return (
    <SkeletonFetchingLoading
      isFetching={isFetching}
      isLoading={isLoading}
      className={twMerge(twMerge('rounded-xl pt-3 -mt-3', className), skeletonClassName)}
    >
      <Controller
        name={name}
        control={control}
        disabled={disabled}
        rules={{
          ...registerOptions,
          onBlur() {
            !firstBlur && trigger(name);
            !firstBlur && setFirstBlur(true);
          }
        }}
        defaultValue={defaultValue || ''}
        render={({ field, formState }) => {
          const error = formState.errors[name];

          const firstBlurOrHasError = firstBlur || (!firstBlur && error);

          return (
            <Input
              type={type}
              prefix={prefix}
              size={size}
              label={label}
              color={
                error ? 'red' : firstBlurOrHasError && !!watch(name)?.length ? 'success' : 'theme'
              }
              helperText={error ? helperText : null}
              readOnly={readOnly}
              dir={dir}
              dirContainer={dirContainer}
              suffix={suffix}
              {...field}
              classNameHelperText={classNameHelperText}
              className={className}
              inputMode={inputMode}
              classNameLabel={classNameLabel}
              onChange={e => {
                if (!!formatter) e.target.value = formatter(e.target.value);

                if (trimmed) e.target.value = e.target.value.trim();

                field.onChange(e);

                firstBlurOrHasError && trigger(name);

                props?.onChange?.(e);
              }}
            />
          );
        }}
      />
    </SkeletonFetchingLoading>
  );
};

export default ControlledInput;
