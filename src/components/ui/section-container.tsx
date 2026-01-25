import type { PropsWithChildren, ReactElement } from "react";

interface IContainerProps extends PropsWithChildren{
  barTitle: string;
  BarLabel: ReactElement
}

export default function SectionContainer({ barTitle, BarLabel, children }: IContainerProps) {
  return (
    <section className="flex flex-col rounded-xl bg-white w-full">
      <header className="w-full flex justify-between px-8 py-3 bg-gray-50 rounded-tr-xl rounded-tl-xl items-center">
        <h5 className="text-xs font-bold font-mono text-gray-400">{barTitle}</h5>
        {BarLabel} 
      </header>
      <hr className="border-gray-200 w-full"/>
      {children}
    </section>
  )
} 