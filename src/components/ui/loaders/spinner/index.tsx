import Icon, { ICON_NAME } from '../../../../lib/icon';
import './styles.css';

const AnimatedSpinner: FC<Components.ui.loaders.spinner> = ({ className }) => {
  return <Icon name={ICON_NAME.SPINNER} className={`spinner ${className}`} />;
};

export default AnimatedSpinner;
