import { FC } from 'react';
import './styles.css';
import { twMerge } from 'tailwind-merge';
import basicLoaderCircle from './styles';

const LoaderCircle: FC<Components.ui.loaders.circle> = ({
  classNameContainer,
  className,
  size = 'medium',
  variation = 'basic'
}) => {
  const variantsContainer = twMerge(
    basicLoaderCircle.styleLoaderCircleContainer(),
    classNameContainer
  );

  const variants = twMerge(basicLoaderCircle.styleLoaderCircle({ size }), className);

  const variantsInnerSpan = basicLoaderCircle.styleLoaderCircleInnerSpan({ size });

  const variantsMiddleSpan = basicLoaderCircle.styleLoaderCircleMiddleSpan({ size });

  return (
    <div className={variantsContainer}>
      <span className={variants}>
        <span className={variantsInnerSpan} />

        <span className={variantsMiddleSpan}></span>
      </span>
    </div>
  );
};

export default LoaderCircle;
