import { useGetLottieJsonQuery } from '../../../services/jsons';
import Lottie, { LottieProps } from 'react-lottie';
import { LottieAnimations } from './types';
import SkeletonFetchingLoading from '../../ui/loaders/skeleton';

interface LottieAnimationProps {
  animation: LottieAnimations;
  width: number;
  height: number;
  options?: Omit<LottieProps['options'], 'animationData'>;
}

const LottieAnimation: FC<LottieAnimationProps> = ({ animation, height, options, width }) => {
  const NewLottie = Lottie as unknown as FC<LottieProps>;

  const { data, isLoading } = useGetLottieJsonQuery({ animation });

  // if(isLoading && !data) return null;

  return (
    <SkeletonFetchingLoading className={`w-[${width}px] h-[${height}px]`} isLoading={isLoading}>
      {!isLoading && data && (
        <NewLottie
          width={width}
          height={height}
          options={{
            animationData: JSON.parse(JSON.stringify(data)),
            autoplay: true,
            loop: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            },
            ...options
          }}
        />
      )}
    </SkeletonFetchingLoading>
  );
};

export default LottieAnimation;
