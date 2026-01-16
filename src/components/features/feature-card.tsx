import type { PropsWithChildren } from "react";
import { Icon } from "../icons/Icon";

export interface IFeature {
  title: string;
  description: string;
  iconName: 'stats' | 'tasks';
}


export default function Feature({title, description, iconName}: PropsWithChildren<IFeature>) {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <span className="w-9 h-9 bg-white rounded-full p-2">
        <Icon name={iconName} />
      </span>
      <div>
        <h6 className="text-primary-100 font-bold text-xs sm:text-sm md:text-base">{title}</h6>
        <p className="text-tertiary-100 text-xs lg:text-base hidden xxs:block">{description}</p>
      </div>
    </div>
  )
}
