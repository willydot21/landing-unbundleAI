import type { PropsWithChildren, ReactElement } from "react";

interface IContainerProps extends PropsWithChildren{
  barTitle: string;
  BarLabel: ReactElement
}

export default function SectionContainer({ barTitle, BarLabel, children }: IContainerProps) {
  return (
    <section className="flex rounded bg-white w-full">
      <header className="w-full flex justify-between px-6 py-3">
        <h5 className="text-xs font-semibold font-mono">{barTitle}</h5>
        {BarLabel} 
      </header>
      <hr className="text-tertiary-100"/>
      {children}
    </section>
  )
} 