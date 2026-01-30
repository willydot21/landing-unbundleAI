import type { PropsWithChildren, ReactElement } from "react";

interface IContainerProps extends PropsWithChildren{
  barTitle: string;
  barColor?: 'current' | 'gray' | 'white';
  padding?: boolean;
  BarLabel?: ReactElement;
  Footer?: ReactElement;
}

export default function SectionContainer({ barTitle, barColor = 'gray', BarLabel, children, Footer, padding=true }: IContainerProps) {

  const barColors = {
    current: 'bg-current',
    gray: 'bg-gray-50',
    white: 'bg-white',
  }

  const paddingClasses = "px-8 py-12";

  return (
    <section className="flex flex-col rounded-xl bg-white w-full drop-shadow-black-op shadow-black-op-100 shadow-2xl">
      <header className={"w-full flex justify-between rounded-tr-xl rounded-tl-xl items-center px-8 py-4" + ' ' + barColors[barColor]}>
        <h5 className="text-xs font-bold  font-mono text-gray-400">{barTitle}</h5>
        {BarLabel} 
      </header>
      <hr className="border-gray-200 w-full"/>
      <div className={"gap-y-2 flex flex-col" + `  ${padding && paddingClasses} `}>
        {children}
      </div>  
      {Footer}
    </section>
  )
} 