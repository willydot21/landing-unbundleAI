
/**
 
 * TODO:
 *  -- Add support for more child types in ListItem (e.g., Avatar, Badge, etc.)
 *  -- Refactor ListItem to handle more complex layouts, and List Component to support more styling options.

**/

import { Children, isValidElement, type PropsWithChildren, type ReactNode } from "react";
import {Icon} from "../icons/Icon";
import Hr from "../ui/Hr";

export interface IListItem {
  iconGap?: 'default' | 'extended';
  variant: 'leading-icon' | 'trailing-icon' | 'text-only';
}

export interface IList {
  dense?: boolean;
  withHr?: boolean;
}

export function ListItemText(
  { primaryText, secondaryText }: 
  { primaryText: string; secondaryText?: string }) {
    
  
  let primaryClasses = "";
  let secondaryClasses = "";
  
  const textStyle = {
    textOnly: {
      primary: "text-sm sm:text-base font-semibold text-tertiary-100",
    },
    multiText: {
      primary: "text-md font-mono font-bold text-primary-100",
      secondary: "text-xs text-gray-400 font-semibold"
    }
  }

  if (secondaryText) {
    primaryClasses = textStyle.multiText.primary;
    secondaryClasses = textStyle.multiText.secondary;
  } else {
    primaryClasses = textStyle.textOnly.primary;
  }

  return (<>
    <h5 className={primaryClasses}>{primaryText}</h5>
    {secondaryText && <p className={secondaryClasses}>{secondaryText}</p>}
  </>);
}

export function ListItem({ iconGap, children, variant}: PropsWithChildren<IListItem>) {

  const asideClases = "flex flex-col gap-y-1 w-full";

  const iconGapClasses = {
    default: "gap-x-2",
    extended: "gap-x-6"
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
        <aside className={asideClases}>
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

  const gapClasses = (variant === 'leading-icon') && iconGapClasses;

  return (
    <li className={"flex flex-row items-center " + gapClasses}>
      {orderedContent}
    </li>
  )
}

export default function List({ dense = false, withHr = false, children }: PropsWithChildren<IList>) {
  
  let childrenWithHr: ReactNode[] = [];
  const listStyle = {
    dense: dense ? 'gap-y-3' : 'gap-y-6'
  };

  if (withHr && children) {
    Children.forEach(children, (child, index) => {
      if (!isValidElement(child)) return;
      childrenWithHr.push(child);
      if (index < Children.count(children) - 1) {
        childrenWithHr.push(
          dense ? <Hr my="none" /> : <Hr my="1" />
        );
      }
    });
  }

  return (
    <ul className={"flex flex-col w-full " + listStyle.dense}>
      { withHr ? childrenWithHr : children }
    </ul>
  )
}