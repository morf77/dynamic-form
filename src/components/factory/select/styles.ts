import { cva } from 'class-variance-authority';

export const styleSelectContainer = cva([
  'border-gray-100',
  'border-l',
  'border-b',
  'border-r',
  'm-b-1',
  'rounded-b-lg',
  'flex',
  'flex-col',
  'items-center',
  'm-2',
  '-mt-1'
]);

export const styleSelectListItem = cva(
  [
    'hover:bg-primary-50',
    'dark:hover:bg-gray-600',
    'cursor-pointer',
    'flex',
    'justify-center',
    'items-center',
    'w-full',
    'p-2'
  ],
  {
    variants: {
      isSelected: {
        true: ['bg-primary-100', 'dark:bg-primary-700'],
        false: ['']
      },
      isFirstItem: {
        true: [''],
        false: ['border-t']
      },
      isLastItem: {
        true: ['rounded-b-2xl'],
        false: ['']
      },
      isActive: {
        true: [''],
        false: ['pointer-events-none opacity-30']
      }
    }
  }
);

const selectBasic = {
  styleSelectContainer,
  styleSelectListItem
};

export default selectBasic;
