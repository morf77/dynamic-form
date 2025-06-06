import { cva } from 'class-variance-authority';

export const styleCheckboxContainer = cva(
  [
    'inline-flex',
    'justify-end',
    'relative',
    'checkbox',
    'select-none',
    'cursor-pointer',
    'rounded-sm'
  ],
  {
    variants: {
      color: {
        theme: ['border', 'border-gray-400'],
        danger: ['border', 'border-danger-500', ''],
        success: ['border', 'border-success-500']
      },
      size: {
        small: ['max-w-8 min-w-8', 'max-h-8 min-h-8'],
        medium: ['max-w-10 min-w-10', 'max-h-10 min-h-10']
      }
    },
    defaultVariants: {
      size: 'medium',
      color: 'theme'
    }
  }
);

export const styleIcon = cva(
  [
    'absolute',
    '-mt-[4px]',
    'ml-1',
    'opacity-0',
    'transition-all',
    'duration-300',
    'fill-success-500',
    'dark:fill-success-600'
  ],
  {
    variants: {
      color: {
        theme: [],
        danger: [],
        success: []
      },

      size: {
        small: ['size-8'],
        medium: ['size-10']
      }
    },
    defaultVariants: {
      size: 'medium',
      color: 'theme'
    }
  }
);

const checkBoxBasic = {
  styleCheckboxContainer,
  styleIcon
};

export default checkBoxBasic;
