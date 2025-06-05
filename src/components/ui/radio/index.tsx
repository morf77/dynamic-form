import { twMerge } from 'tailwind-merge';
import Icon, { ICON_NAME } from '../../../lib/icon';
import RadioBasic from './styles';
import './styles.css';

const Radio: FC<Components.ui.radio> = ({
  className,
  color = 'theme',
  variation = 'basic',
  size = 'medium',
  disabled,
  ...props
}) => {
  const styles = twMerge(RadioBasic.styleRadioContainer({ className, color, size }), className);

  const stylesIcon = twMerge(RadioBasic.styleIcon({ color, size }));

  return (
    <label className={styles}>
      <input className="hidden" type="radio" {...props} />

      <Icon name={ICON_NAME.CHECK} className={stylesIcon} />
    </label>
  );
};

export default Radio;
