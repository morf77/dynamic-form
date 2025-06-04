export enum ICON_NAME {
  HOME = 'home',
  CAR = 'car',
  HEALTH = 'health',
  NAV = 'nav',
  CHECK = 'check',
  SPINNER = 'spinner',
  MOON = 'moon',
  SUN = 'sun'
}

const Icon = ({ name, ...props }: HTMLSvgProps & { name: ICON_NAME }) => {
  return (
    <svg {...props}>
      <use xlinkHref={`/svg/sprites.svg#${name}`} />
    </svg>
  );
};

export default Icon;
