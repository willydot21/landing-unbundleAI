import type { PropsWithChildren } from "react";

export interface IListItem {
  iconGap?: 'default' | 'extended';
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

export function ListItem({ iconGap, children }: PropsWithChildren<IListItem>) {

  const asideClases = "flex flex-col gap-y-1";

  const iconGapClasses = {
    default: "px-2",
    extended: "px-4"
  }[iconGap || 'default'];

  // ADD Icon compatibility , add all gap options and dense option for the list itself to reduce padding and font size for more compact lists.

  return (
    <li className="flex flex-row items-center">
      <aside className={asideClases + " " + iconGapClasses}>
        {children}
      </aside>
    </li>
  )
}

export default function List() {

  return (
    <ul>

    </ul>
  )
}