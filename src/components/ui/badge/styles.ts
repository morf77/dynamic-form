import { cva } from 'class-variance-authority';

const styleBadge = cva(
  [
    // layout
    'rounded-4xl',
    'text-center',
    'font-semibold'
  ],
  {
    variants: {
      size: {
        xxSmall: ['text-3xs', 'p-0'],
        xSmall: ['text-xs', 'py-2', 'px-4'],
        small: ['text-sm', 'py-3', 'px-6'],
        medium: ['py-4', 'px-8'],
        large: ['py-5', 'px-8']
      },
      color: {
        gradientBase: [
          // light (apply on all colors but it will override by next modes)
          'bg-gradient-base-300 text-white dark:text-white shadow-lg',
          // dark
          ''
          // hover
        ],
        info: [
          // light
          'bg-info-100',
          'text-info-500',
          // dark
          ''
        ],
        gradientDanger: [
          // light
          'bg-gradient-danger',
          'border-2',
          'border-danger-500',
          'text-white',
          'dark:text-white',
          // dark
          ''
        ],
        success: [
          // light
          'bg-success-100',
          'text-success-500',
          // dark
          'dark:bg-success-700',
          'dark:text-success-100'
        ],
        warning: [
          // light
          'bg-warning-100',
          'text-warning-500',
          // dark
          'dark:bg-warning-500',
          'dark:text-warning-100'
        ],
        danger: [
          // light
          'bg-danger-100',
          'text-danger-500',
          // dark
          'dark:bg-danger-500',
          'dark:text-danger-100'
        ],
        brown: [
          // light
          'bg-brown-100',
          'text-brown-500',
          // dark
          'dark:bg-brown-500',
          'dark:text-brown-100'
        ],
        yellow: [
          // light
          'bg-yellow-100',
          'text-yellow-500',
          // dark
          'dark:bg-yellow-500',
          'dark:text-yellow-100'
        ]
      }
    }
  }
);

const badgeBasic = {
  styleBadge
};

export default badgeBasic;
