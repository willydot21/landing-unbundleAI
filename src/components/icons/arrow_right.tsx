import type { ISvgProps } from "./Icon";

export default function ArrowRight({ color, colorHover }: ISvgProps) {
  return(
    <svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" className={colorHover + (colorHover ? ' hover:cursor-pointer ' : ' ') + color} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#99a1af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  );
}