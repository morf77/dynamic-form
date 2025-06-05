import { cva } from 'class-variance-authority';

const toggler = cva(
  [
    `duration-100`,
    `h-12`,
    `pr-9`,
    `w-20`,
    `appearance-none`,
    `rounded-full`,
    `bg-gray-400`,
    `hover:cursor-pointer`,
    `pt-1`,

    `before:pointer-events-none`,
    `before:absolute`,
    `before:h-4`,
    `before:w-4`,
    `before:rounded-full`,
    `before:bg-transparent`,
    `before:content-['']`,

    `after:absolute`,
    `after:z-[2]`,
    `after:h-10`,
    `after:w-10`,
    `after:rounded-full`,
    `after:border-none`,
    `after:bg-gray-100`,
    `after:shadow-md`,
    `after:transition-[background-color_0.2s,transform_0.2s]`,
    `after:content-['']`,
    `after:ml-1`,

    `checked:pr-1`,
    `checked:bg-primary-500`,
    `checked:after:absolute`,
    `checked:after:z-[2]`,
    `checked:after:ml-9`,
    `checked:after:h-10`,
    `checked:after:w-10`,
    `checked:after:rounded-full`,
    `checked:after:border-none`,
    `checked:after:bg-gray-100`,
    `checked:after:shadow-md`,
    `checked:after:transition-[background-color_0.2s,transform_0.2s]`,
    `checked:after:content-['']`,

    `dark:bg-gray-600`,
    `dark:after:bg-gray-400`,
    `dark:checked:bg-gray-500`,
    `dark:checked:after:bg-gray-200`
  ],
  {
    variants: {
      color: {}
    }
  }
);

const basicToggler = {
  toggler
};

export default basicToggler;
