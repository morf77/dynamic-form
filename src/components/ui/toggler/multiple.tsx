import { twMerge } from 'tailwind-merge';
import SkeletonFetchingLoading from '../loaders/skeleton';

const TogglerMultiple: FC<{
  list: Array<{ label: ReactNode; value: string; disabled?: boolean }>;
  onChange: (value: string) => void;
  active?: string;
  className?: string;
  isLoading?: boolean;
  disabledTooltip?: ReactNode;
}> = ({ list, onChange, active, className, isLoading }) => {
  const length = list.length;

  return (
    <ul className="w-full flex items-center [&>*]:grow">
      {list.map((item, index) => (
        <li
          className={twMerge(
            `py-6 transition-all font-semibold duration-200 border-secondary-500 text-center ${item.value === active ? 'text-gray-50 bg-gradient-base-500' : 'text-secondary-600'} ${item?.disabled ? 'opacity-50 pointer-events-none' : ''} ${
              // first
              index === 0
                ? 'rounded-s-lg border-b border-l'
                : // last
                  index === length - 1
                  ? 'border border-t-0 rounded-e-lg'
                  : // middles
                    'border-b border-s'
            }`,
            className
          )}
          key={item.value}
          onClick={() => onChange(item.value)}
        >
          <SkeletonFetchingLoading isLoading={isLoading} className="w-full h-full">
            {item.label}
          </SkeletonFetchingLoading>
        </li>
      ))}
    </ul>
  );
};

export default TogglerMultiple;
