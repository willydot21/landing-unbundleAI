import { Icon } from "../icons/Icon";
import List, { ListItem, ListItemText } from "../list";
import SectionContainer from "../ui/section-container";

const SectionFooter = () => 
  <button className="w-full mt-2 font-mono text-sm hover:bg-gray-200 hover:text-tertiary-100 text-gray-400 font-semibold py-4 px-4 rounded-lg rounded-tl-none rounded-tr-none hover:cursor-pointer">VIEW ALL FEATURES</button>


export default function Features({features}: { features: {name: string, category: string, description: string}[] }) {
  return (
    <SectionContainer
      barTitle="EXTRACTED FEATURES"
      barColor="white"
      Footer={<SectionFooter/>}
      BarLabel={<label className="text-xxs font-bold text-gray-300 text-mono"> 12 FEATURES FOUND</label>}>
      <List withHr>
        {features.map(({name, category}, _) => (
          <ListItem variant="trailing-icon">
            <ListItemText primaryText={name} secondaryText={category || "No category provided for this feature."}/>
            <Icon name="star" fillColor="secondary_200" size="large"/>
          </ListItem>
          ))
        }
      </List>
    </SectionContainer>
  )
}