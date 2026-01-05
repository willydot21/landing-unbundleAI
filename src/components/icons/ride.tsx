import type { ISvgProps } from "./Icon";

export default function Ride ({ color, colorHover }: ISvgProps) {
  return (
    <svg viewBox="-4.8 -4.8 33.60 33.60" className={colorHover + (colorHover ? ' hover:cursor-pointer ' : ' ') + color} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="oklch(25.884% 0.06231 286.582)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  );
}