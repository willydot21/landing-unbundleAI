
import type { PropsWithChildren } from "react";
import { Icon } from "../icons/Icon";

export interface IPrint {
  iconName: 'cart' | 'dash' | 'ride';
  title: string;
  description: string;
  version: string; 
}

export default function PrintCard({iconName, title, description, version}: PropsWithChildren<IPrint>) {
  return (
      <div className="bg-white p-5 rounded-xl flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <h5 className="flex flex-row gap-3 text-primary-100 font-bold items-center">
            <span className="flex bg-secondary-50 p-1 rounded-xl">
              <Icon name={iconName} strokeColor="primary" classes="w-8 h-8"/>
            </span>
            {title}
          </h5>
          <p className="text-primary-100 font-bold text-xs bg-gray-100 p-1 px-2 rounded-xl">
            {version}
          </p>
        </div>
        <p className="text-tertiary-100"> {description}</p>
        <a className="text-secondary-200 w-fit font-bold text-sm hover:cursor-pointer hover:text-secondary-100"> VIEW SUMMARY </a>
      </div>
    );
}