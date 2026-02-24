import type { PropsWithChildren } from "react";
import type { IconColor, IconProps } from "../components/icons/Icon";
import Navbar from "../components/ui/navbar";
import SectionContainer from "../components/ui/section-container";
import SectionHeader from "../components/ui/header";
import Tags from "../components/Tags";
import { Icon } from "../components/icons/Icon";
import Alert from "../components/ui/alert";
import Footer from "../components/ui/footer";
import Percent from "../components/ui/percent";
import Hr from "../components/ui/Hr";
import List, { ListItem, ListItemText } from "../components/list";

const Label = ({children}: PropsWithChildren) => {
  return (
    <span className="bg-warning-50 rounded-sm text-xxs font-bold h-fit px-2">
      {children}
    </span>
  );
}

const SectionFooter = () => 
  <button className="w-full mt-2 font-mono text-sm hover:bg-gray-200 hover:text-tertiary-100 text-gray-400 font-semibold py-4 px-4 rounded-lg rounded-tl-none rounded-tr-none hover:cursor-pointer">VIEW ALL FEATURES</button>

export default function Results() {
  return (
    <>
      <Navbar/>
      <div className="flex w-full flex-col md:flex-row pt-32 md:pt-48 justify-center xxs:px-4 gap-8 max-w-8xl">
        <aside className="w-full lg:w-3/5 flex flex-col gap-y-9">
          <SectionContainer 
            barTitle="APP SUMMARY"
            BarLabel={<Label>VERIFIED ANALYSIS</Label>}
          >
          <SectionHeader el="div" title="Project Nexus" size="medium" subtitle="A collaborative productivity suite focused on hyper-local team synchronization and visual task mapping for remote-first engineering teams."/>
          <Tags tags={["PRODUCTIVITY", "COLLABORATION", "B2B SAAS"]}/>
          <Hr my="3" />
          <div className="flex flex-col w-full gap-y-2">
            <h5 className="font-mono text-gray-400 text-xs font-semibold mb-2">MAIN PURPOSES</h5>
          <List dense>
              <ListItem variant="leading-icon" iconGap="extended">
                <Icon name="tick" fillColor="secondary_200" strokeColor="none" size="large" />
                <ListItemText primaryText="Facilitate real-time collaboration among remote engineering teams through shared workspaces and visual task mapping."/>
              </ListItem>
              <ListItem variant="leading-icon" iconGap="extended">
                <Icon name="tick" fillColor="secondary_200" strokeColor="none" size="large" />
                <ListItemText primaryText="Enhance productivity by integrating project management tools with communication features tailored for technical workflows."/>
              </ListItem>
              <ListItem variant="leading-icon" iconGap="extended">
                <Icon name="tick" fillColor="secondary_200" strokeColor="none" size="large" />
                <ListItemText primaryText="Provide a centralized platform for code reviews, documentation, and version control to streamline development processes."/>
              </ListItem>
            </List>
          </div>
          </SectionContainer>
          <SectionContainer
          barTitle="EXTRACTED FEATURES"
          barColor="white"
          Footer={<SectionFooter/>}
          BarLabel={<label className="text-xxs font-bold text-gray-300 text-mono"> 12 FEATURES FOUND</label>}>
            <ul className="flex flex-col gap-y-6">
              {[{name: "Real-time Node Editor", category: "CORE INTERFACE", description: ""},
                {name: "Contextual AI Assistant", category: "AUTOMATION", description: ""},
                {name: "SSO & Auth Integration", category: "SECURITY", description: ""}
              ].map(({name, category}, index) => (
                <>
                  <li key={name} className="flex flex-row items-center justify-between">
                    <aside className="flex flex-col gap-y-1">
                      <h5 className="font-mono text-md font-bold text-primary-100">{name}</h5>
                      <p className="text-xs text-gray-400 font-semibold">{category || "No category provided for this feature."}</p>
                    </aside>
                    <Icon name="star" fillColor="secondary_200" size="large"/>
                  </li>
                  {index < 2 && <Hr/>}
                </>
              ))
              }
            </ul> 
          </SectionContainer>
          <button className="sticky bottom-3 mx-3 xxs:mx-0 left-0 md:relative flex justify-center items-center gap-x-3 bg-secondary-200 hover:bg-primary-100 text-primary-100 transition-colors rounded-lg p-4 mt-4 font-mono font-bold hover:cursor-pointer hover:text-secondary-200 active:text-secondary-100 drop-shadow-black-op shadow-black-op-100 shadow-2xl">
            <Icon name="rocket" fillColor="current" size="large" />
            GENERATE BLUEPRINT
          </button>
        </aside>
        <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-y-9 [&>span.alert]:rounded-none [&>span.alert]:xxs:rounded-xl">
          <div className="flex flex-col w-full p-8 bg-white xxs:rounded-xl items-center justify-center gap-y-6 drop-shadow-black-op shadow-black-op-100 shadow-2xl">
            <h5 className="text-gray-400 font-mono ">UNBUNDLING SCORE</h5>
            <Percent value={75}/>
            <p className="text-gray-500 font-semibold text-center"> High potential of micro-SaaS extraction</p>
          </div>
          <SectionContainer
            barTitle="QUICK ACTIONS"
            barColor="white"
          >
            <ul className="flex flex-col gap-y-4">
              {
                [
                  {label: "EXPORT JSON", icon: 'download', strokeColor: 'current' as IconColor, fillColor: undefined},
                  {label: "COPY PITCH", icon: 'copy'},
                  {label: "SAVE IDEA", icon: 'save'},
                ].map(({label, icon, ...rest}) => 
                  <li key={label} className="flex justify-start p-4 rounded-lg items-center gap-x-3 cursor-pointer hover:text-primary-200 font-semibold text-sm transition-colors bg-gray-200 hover:bg-gray-300 w-full">
                    <Icon name={icon as  IconProps['name']} fillColor="current"  {...rest} size="medium" />
                    {label}
                  </li>
                )
              }
            </ul>
          </SectionContainer>
          <Alert
            type="info"
            title="ANALYSIS ENGINE"
            message="Deconstructed using UnbundleAi API with architectectural Huggin Face inference model. Analysis completed in 4.2s."
          />
        </aside>
      </div>
      <Footer/>
    </>
  )
}