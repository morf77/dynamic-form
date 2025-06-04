import { twMerge } from 'tailwind-merge';
import Icon, { ICON_NAME } from '../../../lib/icon';
import checkBoxBasic from './styles';
import './styles.css';

const Checkbox: FC<Components.ui.checkbox> = ({
  className,
  color = 'theme',
  variation = 'basic',
  size = 'medium',
  disabled,
  ...props
}) => {
  const styles = twMerge(
    checkBoxBasic.styleCheckboxContainer({ className, color, size }),
    className
  );

  const stylesIcon = twMerge(checkBoxBasic.styleIcon({ color, size }));

  return (
    <label className={styles}>
      <input className="hidden" type="checkbox" {...props} />

      <Icon name={ICON_NAME.CHECK} className={stylesIcon} />
    </label>
  );
};

export default Checkbox;
