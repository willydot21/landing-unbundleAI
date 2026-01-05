
export interface IMenuButtonProps {
  state: boolean;
  click?: () => void;
}


export default function MenuButton({click, state}: IMenuButtonProps) {
  const _bar = `
    z-10
    block
    w-6 h-1
    my-1
    bg-black
    transition-all duration-200 ease-in-out
    data-[enabled=true]:bg-white
  `;

  return (
    <button onClick={click} className="block md:hidden">
      <span data-enabled={state} className={_bar + "data-[enabled=true]:translate-y-2 data-[enabled=true]:rotate-45"}></span>
      <span data-enabled={state} className={_bar + "data-[enabled=true]:opacity-0"}></span>
      <span data-enabled={state} className={_bar + "data-[enabled=true]:-translate-y-2 data-[enabled=true]:-rotate-45"}></span>
    </button>
  );
}