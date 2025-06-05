import { cva } from 'class-variance-authority';
import './styles.css';

const styleContainer = cva(
  [
    // layout
    'relative',
    'flex',
    'flex-row-reverse',
    'items-center',
    'justify-between',
    // detailed
    'basic-group',
    // animation
    'rounded-md'
  ],
  {
    variants: {
      color: {
        theme: [
          // light
          'border',
          // dark
          '',
          // focused
          '',
          'focus:border-info-500'
        ],
        red: [
          // light
          'border',
          'border-red-500',
          // dark
          ''
        ],
        success: [
          // light
          'border',
          'border-success-500',
          // dark
          ''
        ]
      },
      size: {
        small: ['px-4', 'py-3', 'text-xs'],
        medium: ['px-6', 'py-4'],
        large: ['px-8', 'py-5', 'text-xl']
      }
    },
    defaultVariants: {
      size: 'small',
      color: 'theme'
    }
  }
);

const styleInput = cva(
  [
    // layout
    'min-h-full',
    'w-full',
    'items-center',
    'flex',
    ,
    // animation
    '',
    // detailed
    'bg-transparent',
    'text-primary-900',
    'dark:text-gray-100'
  ],
  {
    variants: {
      variation: {
        basic: []
      },
      color: {
        theme: [
          // light
          'placeholder-gray-300',
          // dark
          ''
        ],
        red: [
          // light
          'placeholder-danger-300',
          // dark
          ''
        ],
        success: [
          // light
          'placeholder-success-300',
          // dark
          ''
        ]
      },
      size: {
        small: ['text-xs', 'px-3', 'py-4'],
        medium: ['text-md', 'px-6', 'py-5'],
        large: ['text-xl', 'px-8', 'py-5']
      }
    },
    defaultVariants: {
      size: 'small',
      variation: 'basic',
      color: 'theme'
    }
  }
);

const styleLabel = cva(
  [
    // layout
    // animation
    'transition-all',
    'duration-200',
    // detailed
    'whitespace-nowrap'
  ],
  {
    variants: {
      variation: {
        basic: [
          // layout
          'top-[25%]',
          // animation
          'label'
          // detailed
        ]
      },
      color: {
        theme: [
          // light
          'text-gray-500',
          // dark
          ''
        ],
        red: [
          // light
          'text-danger-400',
          // dark
          ''
        ],
        success: [
          // light
          'text-success-400',
          // dark
          ''
        ]
      },
      size: {
        small: ['text-xs'],
        medium: ['text-md'],
        large: ['text-xl']
      }
    },
    defaultVariants: {
      size: 'small',
      variation: 'basic',
      color: 'theme'
    }
  }
);

const stylePrefix = cva(
  [
    // layout
    'flex',
    'items-center',
    'justify-center',
    ,
    // animation
    '',
    // detailed
    'text-end'
  ],
  {
    variants: {
      variation: {
        basic: ['']
      },
      color: {
        theme: [
          // light
          'text-gray-400',
          // dark
          'dark:text-gray-300'
        ],
        red: [
          // light
          'text-danger-400',
          ,
          // dark
          ''
        ],
        success: [
          // light
          'text-success-400',
          // dark
          ''
        ]
      },
      size: {
        small: [''],
        medium: [''],
        large: ['']
      }
    },
    defaultVariants: {
      size: 'small',
      variation: 'basic',
      color: 'theme'
    }
  }
);

const styleSuffix = cva(
  [
    // layout
    'flex',
    'items-center',
    'justify-center',
    ,
    // animation
    '',
    // detailed
    'text-end'
  ],
  {
    variants: {
      variation: {
        basic: ['']
      },
      color: {
        theme: [
          // light
          'text-gray-400',
          // dark
          'dark:text-gray-300'
        ],
        red: [
          // light
          'text-danger-400',
          ,
          // dark
          ''
        ],
        success: [
          // light
          'text-success-400',
          // dark
          ''
        ]
      },
      size: {
        small: [''],
        medium: [''],
        large: ['']
      }
    },
    defaultVariants: {
      size: 'small',
      variation: 'basic',
      color: 'theme'
    }
  }
);

const styleHelperText = cva(
  [
    // layout
    'absolute',
    'bottom-[-11%]',
    'px-1',
    // animation
    '',
    // detailed
    'text-3xs',
    'bg-gray-200 dark:bg-gray-900',
    'start-5'
  ],
  {
    variants: {
      color: {
        theme: [
          // light
          'text-gray-400',
          // dark
          ''
        ],
        red: [
          // light
          '!text-danger-400',
          // dark
          ''
        ],
        success: [
          // light
          'text-success-400',
          ,
          // dark
          ''
        ]
      },
      size: {
        small: [''],
        medium: [''],
        large: ['']
      }
    },
    defaultVariants: {
      size: 'small',
      color: 'theme'
    }
  }
);

const inputBasic = {
  styleContainer,
  styleInput,
  styleLabel,
  stylePrefix,
  styleSuffix,
  styleHelperText
};

export default inputBasic;
