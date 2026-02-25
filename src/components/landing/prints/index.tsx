import PrintCard, { type IPrint } from "./print-card";
import { Icon } from "../../icons/Icon";

export default function Blueprints({prints}: {prints: IPrint[]}) {
  return (
    <section className="flex flex-col w-full gap-y-9 pt-9">
      <header className="flex flex-row items-center xxs:items-end justify-between">
        <div>
          <h4 className="text-primary-100 font-bold text-lg">
            Recent Blueprints
          </h4>
          <p className="text-gray-500 text-sm font-semibold">
            Pick up where you left off.
          </p>
        </div>
        <a className="text-primary-100 justify-center items-center font-xs flex hover:cursor-pointer hover:text-primary-200">
          <p className="hidden xxs:block">View all history</p>
          <Icon name="dir_right" classes="xxs:pt-1" fillColor="current"/>
        </a> 
      </header>
      <div className="grid grid-cols-(--autofit-min) gap-3">
        {prints.map(PrintCard)}
      </div>
    </section>
  )
}