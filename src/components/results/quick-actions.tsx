import { Icon, type IconColor, type IconProps } from "../icons/Icon";
import SectionContainer from "../ui/section-container";

const actions = [
  {label: "EXPORT JSON", icon: 'download', strokeColor: 'current' as IconColor, fillColor: undefined},
  {label: "COPY PITCH", icon: 'copy'},
  {label: "SAVE IDEA", icon: 'save'},
];

export default function QuickActions() {
  return (
    <SectionContainer
      barTitle="QUICK ACTIONS"
      barColor="white"
    >
      <ul className="flex flex-col gap-y-4">
        {
          actions.map(({label, icon, ...rest}) => 
            <li key={label} className="flex justify-start p-4 rounded-lg items-center gap-x-3 cursor-pointer hover:text-primary-200 font-semibold text-sm transition-colors bg-gray-200 hover:bg-gray-300 w-full">
              <Icon name={icon as  IconProps['name']} fillColor="current"  {...rest} size="medium" />
              {label}
            </li>
          )
        }
      </ul>
    </SectionContainer>
  );
}