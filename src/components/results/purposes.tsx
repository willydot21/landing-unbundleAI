import { Icon } from "../icons/Icon";
import List, { ListItem, ListItemText } from "../list";

export default function Purposes({purposes}: { purposes: string[] }) {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <h5 className="font-mono text-gray-400 text-xs font-semibold mb-2">MAIN PURPOSES</h5>
      <List dense>{
        purposes.map((purpose, _) => (
          <ListItem variant="leading-icon" iconGap="default">
            <Icon name="tick" fillColor="secondary_200" strokeColor="none" size="large" />
            <ListItemText primaryText={purpose}/>
          </ListItem>
        ))}
      </List>
    </div>
  );
}