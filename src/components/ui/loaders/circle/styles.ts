import { cva } from 'class-variance-authority';

const styleLoaderCircleContainer = cva([
  // layout
  'flex',
  'justify-center',
  'items-center',
  'w-full',
  'h-full'
]);

const styleLoaderCircle = cva(
  [
    // layout
    'relative',
    'rounded-full',
    'aspect-square',
    // animation
    'animate-[spin_1s_linear_infinite]'
  ],
  {
    variants: {
      size: {
        xsmall: ['h-[16px]'],
        small: ['h-[32px]'],
        medium: ['h-[64px]'],
        large: ['h-[80px]'],
        xl: ['h-[128px]']
      }
    },
    defaultVariants: {
      size: 'medium'
    }
  }
);

const styleLoaderCircleInnerSpan = cva(
  [
    // layout
    'absolute',
    'inset-0',
    'rounded-full',
    // animation
    'animate-[prixClipFix_2s_linear_infinite]',
    'border-secondary-700',
    'rotate-180'
  ],
  {
    variants: {
      size: {
        xsmall: ['border-[1px]'],
        small: ['border-[2px]'],
        medium: ['border-[3px]'],
        large: ['border-[4px]'],
        xl: ['border-[5px]']
      }
    },
    defaultVariants: {
      size: 'medium'
    }
  }
);

const styleLoaderCircleMiddleSpan = cva(
  [
    // layout
    'absolute',
    'rounded-full',
    // animation
    'animate-[prixClipFix_2s_linear_infinite,spin-reverse_0.5s_linear_infinite]',
    'border-primary-600'
  ],
  {
    variants: {
      size: {
        xsmall: ['inset-[1px]', 'border-[1px]'],
        small: ['inset-[2px]', 'border-[2px]'],
        medium: ['inset-[4px]', 'border-[3px]'],
        large: ['inset-[6px]', 'border-[4px]'],
        xl: ['inset-[7px]', 'border-[5px]']
      }
    },
    defaultVariants: {
      size: 'medium'
    }
  }
);

const basicLoaderCircle = {
  styleLoaderCircleContainer,
  styleLoaderCircle,
  styleLoaderCircleInnerSpan,
  styleLoaderCircleMiddleSpan
};

export default basicLoaderCircle;
