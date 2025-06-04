import { twMerge } from 'tailwind-merge';
import badgeBasic from './styles';

const Badge: FC<Components.ui.badge> = ({ children, dir, size = 'xSmall', color, className }) => {
  const style = twMerge(badgeBasic.styleBadge({ color, size }), className);

  return typeof children === 'string' ? (
    <p dir={dir} className={style}>
      {children}
    </p>
  ) : (
    <div dir={dir} className={style}>
      {children}
    </div>
  );
};

export default Badge;
