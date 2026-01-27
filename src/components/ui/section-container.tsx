import type { PropsWithChildren, ReactElement } from "react";

interface IContainerProps extends PropsWithChildren{
  barTitle: string;
  barColor?: 'current' | 'gray' | 'white';
  BarLabel?: ReactElement
}

export default function SectionContainer({ barTitle, barColor = 'gray', BarLabel, children }: IContainerProps) {

  const barColors = {
    current: 'bg-current',
    gray: 'bg-gray-50',
    white: 'bg-white',
  }

  return (
    <section className="flex flex-col rounded-xl bg-white w-full drop-shadow-black-op shadow-black-op-200 shadow-2xl">
      <header className={"w-full flex justify-between rounded-tr-xl rounded-tl-xl items-center px-8 py-3" + ' ' + barColors[barColor]}>
        <h5 className="text-xs font-bold  font-mono text-gray-400">{barTitle}</h5>
        {BarLabel} 
      </header>
      <hr className="border-gray-200 w-full"/>
      <div className="px-8 py-3 pt-8 pb-10 gap-y-2 flex flex-col">
        {children}
      </div>
    </section>
  )
} 