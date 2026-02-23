import { Children, isValidElement, type PropsWithChildren, type ReactNode } from "react";
import {Icon} from "../icons/Icon";

export interface IListItem {
  iconGap?: 'default' | 'extended';
  variant: 'leading-icon' | 'trailing-icon' | 'text-only';
}

export interface IList {
  dense?: boolean;
}

export function ListItemText(
  { primaryText, secondaryText }: 
  { primaryText: string; secondaryText?: string }) {

  const primaryClasses = "font-mono text-md font-bold text-primary-100";
  const secondaryClasses = "text-xs text-gray-400 font-semibold";

  return (<>
    <h5 className={primaryClasses}>{primaryText}</h5>
    {secondaryText && <p className={secondaryClasses}>{secondaryText}</p>}
  </>);
}

export function ListItem({ iconGap, children, variant = 'leading-icon'}: PropsWithChildren<IListItem>) {

  const asideClases = "flex flex-col w-full gap-y-1";

  const iconGapClasses = {
    default: "px-2",
    extended: "px-7"
  }[iconGap || 'default'];
  
  let icon:ReactNode = null, text:ReactNode = null;

  if (children){
    Children.forEach(children, child => {
    if (!isValidElement(child)) return;
    if (child.type === Icon) icon = child;
    if (child.type === ListItemText) text = child;
    // You can add more conditions here for other child types if needed
    });
  }

  const orderedContent = {
    "leading-icon": (
      <>
        {icon}
        <aside className={asideClases + " " + icon && iconGapClasses}>
          {text}
        </aside>
      </>
    ),
    "trailing-icon": (
      <>
        <aside className={asideClases}>
          {text}
        </aside>
        {icon}
      </>
    ),
    "text-only": <>{text}</>
  }[variant];

  return (
    <li className="flex flex-row items-center w-full">
      {orderedContent}
    </li>
  )
}

export default function List({ dense = false, children }: PropsWithChildren<IList>) {

  const listStyle = {
    dense: dense ? 'gap-y-2' : 'gap-y-6'
  };

  // Add hr between items except the last one

  return (
    <ul className={"flex flex-col w-full max-w-2xl my-auto " + listStyle.dense}>
      {children}
    </ul>
  )
}