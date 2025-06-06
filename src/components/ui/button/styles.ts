import { cva } from 'class-variance-authority';

const styleButton = cva(
  [
    // layout
    'flex justify-content justify-center items-center relative',
    // detailed styling
    'font-semibold',
    'rounded-md',
    'shadow-md',
    // animation
    'transition-color duration-200'
  ],
  {
    variants: {
      color: {
        gradientBase: [
          // light (apply on all colors but it will override by next modes)
          'bg-gradient-base-500 text-white shadow-lg',
          // dark
          '',
          // hover
          'hover:bg-gradient-base-600',
          // active
          'active:bg-gradient-base-600'
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
        info: [
          // light (apply on all colors but it will override by next modes)
          'bg-info-500 text-white',
          // dark
          '',
          // hover
          'hover:bg-info-600',
          // active
          'active:outline active:outline-info-100'
        ],

        warning: [
          // light (apply on all colors but it will override by next modes)
          'bg-warning-100 text-white',
          // dark
          '',
          // hover
          'hover:bg-warning-500 hover:text-white',
          // active
          'active:outline active:outline-warning-100'
        ],

        success: [
          // light (apply on all colors but it will override by next modes)
          'bg-success-700 text-white',
          // dark
          '',
          // hover
          'hover:bg-success-500 hover:text-white',
          // active
          'active:outline active:outline-success-100'
        ],

        danger: [
          // light (apply on all colors but it will override by next modes)
          'bg-danger-500 text-white',
          // dark
          'dark:bg-danger-600',
          // hover
          '',
          // active
          'active:outline active:outline-danger-100'
        ],

        transparent: [
          // light (apply on all colors but it will override by next modes)
          '',
          // dark
          '',
          // hover
          '',
          // active
          ''
        ],

        theme: [
          // light (apply on all colors but it will override by next modes)
          'bg-white border border-gray-100',
          // dark
          'dark:bg-gray-700',
          // hover
          'hover:bg-gray-100',
          // active
          ''
        ]
      },
      size: {
        xxSmall: ['p-0'],
        xSmall: ['text-xs', 'py-2', 'px-4'],
        small: ['py-3', 'px-6'],
        medium: ['text-xl', 'py-4', 'px-8'],
        large: ['text-2xl', 'py-5', 'px-10']
      },
      disabled: {
        'true': 'cursor-not-allowed pointer-events-none glass-gradient-gray-md text-gray-600',
        'false': ''
      },
      isLoading: {
        'true': 'cursor-not-allowed pointer-events-none opacity-50',
        'false': ''
      }
    },
    defaultVariants: {
      size: 'medium',
      color: 'gradientBase'
    }
  }
);

// this is a custom activation color for button
const styleButtonActive = cva('pointer-event-none', {
  variants: {
    color: {
      gradientBase: [
        // light
        'bg-gradient-base-600',
        // dark
        ''
      ],
      info: [
        // light
        'outline outline-info-100',
        // dark
        ''
      ],
      warning: [
        // light
        'outline outline-warning-100',
        // dark
        ''
      ],
      success: [
        // light
        'outline outline-success-100',
        // dark
        ''
      ],
      gradientDanger: [
        // light
        'outline outline-success-100',
        // dark
        ''
      ],
      transparent: [
        // light
        '',
        // dark
        ''
      ],
      theme: [
        // light
        '',
        // dark
        ''
      ],
      danger: [
        // light
        'outline outline-danger-100',
        // dark
        ''
      ]
    }
  },
  defaultVariants: {
    color: 'gradientBase'
  }
});

const styleButtonLoading = cva('absolute stroke-white', {
  variants: {
    color: {
      gradientBase: [
        // light
        '',
        // dark
        ''
      ],
      info: [
        // light
        '',
        // dark
        ''
      ],
      gradientDanger: [
        // light
        '',
        // dark
        ''
      ],
      warning: [
        // light
        '',
        // dark
        ''
      ],
      danger: [
        // light
        '',
        // dark
        ''
      ],

      success: [
        // light
        'outline outline-success-100',
        // dark
        ''
      ],

      transparent: [
        // light
        '',
        // dark
        ''
      ],
      theme: [
        // light
        '',
        // dark
        ''
      ]
    }
  },
  defaultVariants: {
    color: 'gradientBase'
  }
});

const buttonBasic = {
  styleButton,
  styleButtonActive,
  styleButtonLoading
};

export default buttonBasic;
