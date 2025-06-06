// React Types shorthand
type React = import('react');

type ReactNode = React.ReactNode;

type JsxAttribute = import('typescript').JsxAttribute;

type FC<T = unknown> = React.FC<T>;

type PropsWithChildren<T = unknown> = React.PropsWithChildren<T>;

type Ref<T> = React.Ref<T>;

type ForwardedRef<T> = React.ForwardedRef<T>;

type MutableRefObject<T> = React.MutableRefObject<T>;

type LegacyRef<T> = React.LegacyRef<T>;

type Dispatch<T> = React.Dispatch<T>;

type Setter<T = unknown> = Dispatch<SetStateAction<T>>;

type RefObject<T> = import('react').RefObject<T>;

// HTML types shorthand
type HTMLAttributes<T = unknown> = HTMLAttributes<T>;

type HTMLDivProps = HTMLAttributes<HTMLDivElement>;

type HTMLHeaderProps = HTMLAttributes<HTMLElement>;

type HTMLSectionProps = HTMLAttributes<HTMLElement>;

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type HTMLSvgProps = React.SVGAttributes<HTMLOrSVGElement>;

// global types
type DynamicComponent<T = unknown> = T extends undefined
  ? () => ReactNode | React.ComponentType
  : (props: T) => ReactNode | React.ComponentType;

// redux store
type RootState = import('./store').RootState;
