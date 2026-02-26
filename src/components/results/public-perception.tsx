import { Icon } from "../icons/Icon";
import List, { ListItem, ListItemText } from "../list";
import SectionContainer from "../ui/section-container";

export default function PublicPerception({ data }: { data:string[]}) {
  return (
    <SectionContainer
      barTitle="PUBLIC PERCEPTION"
      barColor="white"
      padding="small"
    >
      <List dense >
        {
          data.map((item, _) => (
            <ListItem variant="leading-icon">
              <Icon name="flash" fillColor="secondary_200" strokeColor="none" size="large" />
              <ListItemText primaryText={item}/>
            </ListItem>
          ))
        }
      </List>
    </SectionContainer>
  );
}