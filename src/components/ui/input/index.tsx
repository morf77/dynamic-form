import { twMerge } from 'tailwind-merge';
import inputBasic from './styles';

const Input: FC<Components.ui.input> = ({
  label,
  className,
  onChange,
  color,
  size,
  prefix,
  suffix,
  helperText,
  dirContainer = 'ltr',
  classNameInput,
  classNameLabel,
  classNamePrefix,
  classNameHelperText,
  ...props
}) => {
  console.log(size);

  const stylesContainer = twMerge(inputBasic.styleContainer({ size, color }), className);

  const styles = twMerge(inputBasic.styleInput({ size, color }), classNameInput);

  const stylesLabel = twMerge(inputBasic.styleLabel({ color, size }), classNameLabel);

  const stylesPrefix = twMerge(inputBasic.stylePrefix({ color, size }), classNamePrefix);

  const stylesSuffix = twMerge(inputBasic.styleSuffix({ color, size }), classNamePrefix);

  const stylesHelperText = twMerge(
    inputBasic.styleHelperText({ size, color }),
    classNameHelperText
  );

  return (
    <label dir={dirContainer} className={stylesContainer} htmlFor={props.id || props.name}>
      {prefix && (
        <label className={`${stylesPrefix} px-2`} htmlFor={props.id || props.name}>
          {typeof prefix === 'function' ? prefix() : prefix}
        </label>
      )}

      <input
        {...props}
        className={styles}
        onChange={onChange}
        placeholder={props.placeholder || '  '}
        id={props.id || props.name}
      />
      {label && (
        <label className={stylesLabel} htmlFor={props.id || props.name}>
          <span className="beforeContent" />
          {label}
          <span className="afterContent" />
        </label>
      )}
      {suffix && (
        <label className={`${stylesSuffix} px-2`} htmlFor={props.id || props.name}>
          {typeof suffix === 'function' ? suffix() : suffix}
        </label>
      )}
      {helperText && (
        <p className={stylesHelperText}>
          <b className="text-lg leading-none mx-1">*</b>
          {helperText}
        </p>
      )}
    </label>
  );
};

export default Input;
