import Icon, { ICON_NAME } from '../../../../lib/icon';
import './styles.css';

const AnimatedSpinner: FC<Components.ui.loaders.spinner> = ({ className }) => {
  return (
    <Icon
      name={ICON_NAME.SPINNER}
      className={`spinner size-10 fill-transparent stroke-primary-500 ${className}`}
    />
  );
};

export default AnimatedSpinner;
