import { twMerge } from 'tailwind-merge';
import basicToggler from './styles';

const Toggler: FC<Components.ui.toggler> = ({ isChecked = false, onChange, className }) => {
  return (
    <div className="relative">
      <input
        className={twMerge(basicToggler.toggler(), className)}
        type="checkbox"
        role="switch"
        onChange={onChange}
        checked={isChecked}
      />
    </div>
  );
};

export default Toggler;
