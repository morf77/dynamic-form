import Portal from '../../../../providers/portal';
import LoaderCircle from '../circle/circle';

const LoadingCircleAbsolute: FC = () => {
  console.log('loader is on');
  return (
    <Portal
      target="layout"
      className="absolute top-0 bottom-0 left-0 right-0 min-w-full h-full flex backdrop-blur-sm  z-10"
    >
      <LoaderCircle size="xl" />
    </Portal>
  );
};

export default LoadingCircleAbsolute;
