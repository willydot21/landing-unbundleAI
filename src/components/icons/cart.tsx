import type { ISvgProps } from "./Icon";

export default function Cart ({color, colorHover}:ISvgProps) {
  return (
    <svg viewBox="-4.8 -4.8 33.60 33.60" xmlns="http://www.w3.org/2000/svg" className={colorHover + (colorHover ? ' hover:cursor-pointer ' : ' ') + color}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="oklch(25.884% 0.06231 286.582)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  );
}

