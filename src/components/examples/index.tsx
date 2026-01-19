import type { PropsWithChildren } from "react";
import {Icon} from "../icons/Icon";
import ExampleCard, {type IExample} from "./example-card";

interface IExamplesProps extends PropsWithChildren {
  samples: IExample[];
}

export default function Examples({samples}: IExamplesProps) {
  return (
    <section className="flex flex-col gap-y-2 h-fit bg-white rounded-xl shadow-black-op shadow-2xl w-full md:w-5/6 lg:w-4/6 xl:w-1/3 py-7 px-4 lg:px-8">
      <header className="flex flex-row justify-between items-center">
        <h5 className="flex flex-row text-primary-100 font-bold gap-1">
          <Icon name="flash" size="large" strokeColor="secondary"/>
          Quick Start
        </h5>
        <h4 className="text-gray-400 font-bold text-xs">
          EXAMPLES
        </h4>
      </header>
      <hr className="text-gray-200"/>
      <div className="flex flex-col gap-3 py-7">
        {samples.map(el => <ExampleCard {...el}/>)}
      </div>
      <button className="flex flex-row font-semibold group justify-center items-center p-2 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 gap-1 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-400">
        <Icon name="add" fillColor="current" size="medium"/>
        Analyze Custom App
      </button>
    </section>
  );
}