import { twMerge } from 'tailwind-merge';
import LottieAnimation from '../lottie/lottie-animation';

interface NoDataFoundProps {
  title?: string;
  description?: string;
  className?: string;
}

const NoDataFound: FC<NoDataFoundProps> = ({
  title = 'داده‌ای یافت نشد',
  description = 'در حال حاضر اطلاعاتی وجود ندارد',
  className
}) => {
  return (
    <div className={twMerge(`flex flex-col items-center justify-center gap-4 py-[20%]`, className)}>
      <LottieAnimation animation="search-fail" width={130} height={130} options={{ loop: false }} />
      <h3 className="text-lg font-medium text-gray-700 mt-5">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default NoDataFound;
