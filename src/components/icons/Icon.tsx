
import AddSvg from "./add";
import ArrowRightSvg from "./arrow_right";
import CartSvg from "./cart";
import DashSvg from "./dash";
import DirRightSvg from "./dir_right";
import RideSvg from "./ride";
import FlashSvg from "./flash";
import WandSvg from "./wand";
import LinkSvg from "./link";
import TasksSvg from "./tasks";
import StatsSvg from "./stats";
import TickSvg from "./tick";

type IconColor = 'current' | 'primary' | 'primary_200' | 'secondary_50' | 'secondary' | 'secondary_200' | 'tertiary' | 'gray_400' | 'none';

export interface ISvgProps {
  colorHover?: string;
  color?: string;
}

export interface IconProps  {
  name: 'add' | 'arrow_right' | 'cart' | 'ride' | 'dash' | 'dir_right' | 'flash' | 'wand' | 'link' | 'stats' | 'tasks' | 'tick';
  classes?: string;
  colorHover?: IconColor;
  fillColor?: IconColor;
  strokeColor?: IconColor;
  size?: 'small' | 'medium' | 'large'  | 'extraLarge';
}

const svgs = {
  add: AddSvg,
  arrow_right: ArrowRightSvg,
  cart: CartSvg,
  dash: DashSvg,
  ride: RideSvg,
  dir_right: DirRightSvg,
  flash: FlashSvg,
  wand: WandSvg,
  link: LinkSvg,
  stats: StatsSvg,
  tasks: TasksSvg,
  tick: TickSvg
}

export const Icon = (props: IconProps) => {

  // DEFINE HOVER AS BOOLEAN FOR NOW LATER EXTEND TO COLORS

  const fillColors = {
    none: 'fill-none',
    current: 'fill-current',
    primary: 'fill-primary-100',
    primary_200: 'fill-primary-200',
    secondary_50: 'fill-secondary-50',
    secondary: 'fill-secondary-100',
    secondary_200: 'fill-secondary-200',
    tertiary: 'fill-tertiary-100',
    gray_400: 'fill-gray-400',
  }[props.fillColor || 'none'];


  const strokeColors = {
    none: 'stroke-none',
    current: 'stroke-current',
    primary: 'stroke-primary-100',
    primary_200: 'stroke-primary-200',
    secondary_50: 'stroke-secondary-50',
    secondary: 'stroke-secondary-100',
    secondary_200: 'fill-secondary-200',
    tertiary: 'stroke-tertiary-100',
    gray_400: 'stroke-gray-400',
  }[props.strokeColor || 'none'];
  

  const colors = fillColors + ' ' + strokeColors;
  

  const hover = {
    none: '',
    current: 'child-path-hover:fill-current',
    primary: 'child-path-hover:fill-(--color-primary-100)',
    primary_200: 'child-path-hover:fill-(--color-primary-200)',
    secondary_50: 'child-path-hover:fill-(--color-secondary-50)',
    secondary: 'child-path-hover:fill-(--color-secondary-100)',
    secondary_200: 'child-path-hover:fill-(--color-secondary-200)',
    tertiary: 'child-path-hover:fill-(--color-tertiary-100)',
    gray_400: 'child-path-hover:fill-(--color-gray-400)',
  }[props.colorHover || 'none'];

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
    extraLarge: 'w-10 h-10'
  }[props.size || 'medium'];

  const SvgComponent = svgs[props.name];
  if (!SvgComponent) {
    return null; // or some fallback UI
  }

  return( 
    <span className={props.classes + ' h-fit ' + sizeClasses}>
      <SvgComponent color={colors} colorHover={hover} />
    </span>
    );
}