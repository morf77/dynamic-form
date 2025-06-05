import { cva } from 'class-variance-authority';

export const styleDropdownContainer = cva(
  [
    // layout
    'relative'
    // detailed
    // animations
  ],
  {
    variants: {},
    compoundVariants: [],
    defaultVariants: {}
  }
);

export const styleDropdown = cva(
  [
    // layout
    'absolute',
    // animations
    'transition-all',
    'duration-200',
    // detailed
    'overflow-hidden',
    'bg-gray-200 dark:bg-gray-900',
    'z-10'
  ],
  {
    variants: {
      isFit: {
        'false': '',
        'true': 'h-full'
      },
      isVertical: {
        'false': '',
        'true': 'h-full'
      },
      color: {
        transparent: '',
        theme: [
          // light
          'background',
          // dark
          ''
        ]
      }
    },
    compoundVariants: [
      {
        isFit: true,
        isVertical: false,
        className: 'h-full'
      },
      {
        isFit: true,
        isVertical: true,
        className: 'w-full'
      }
    ],
    defaultVariants: {
      isFit: false
    }
  }
);

const dropdownBasic = {
  styleDropdownContainer,
  styleDropdown
};

export default dropdownBasic;
