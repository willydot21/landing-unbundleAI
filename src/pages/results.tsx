import type { PropsWithChildren } from "react";
import type { IconColor, IconProps } from "../components/icons/Icon";
import Navbar from "../components/ui/navbar";
import SectionContainer from "../components/ui/section-container";
import SectionHeader from "../components/ui/header";
import Tags from "../components/Tags";
import { Icon } from "../components/icons/Icon";
import Alert from "../components/ui/alert";

const Label = ({children}: PropsWithChildren) => {
  return (
    <span className="bg-warning-50 rounded-sm text-xxs font-bold h-fit px-2">
      {children}
    </span>
  );
}

export default function Results() {
  return (
    <>
      <Navbar/>
      <div className="flex w-full pt-32 justify-center px-4 gap-8 max-w-8xl">
        <aside className="w-full lg:w-3/5 flex flex-col gap-y-9">
          <SectionContainer 
          barTitle="APP SUMMARY"
          BarLabel={<Label>VERIFIED ANALYSIS</Label>}
          >
          <SectionHeader el="div" title="Project Nexus" size="medium" subtitle="A collaborative productivity suite focused on hyper-local team synchronization and visual task mapping for remote-first engineering teams."/>
          <Tags tags={["PRODUCTIVITY", "COLLABORATION", "B2B SAAS"]}/>
          <hr className="border-gray-200 w-full my-4"/>
          <div className="flex flex-col w-full">
            <h5 className="font-mono text-gray-400 text-xs font-semibold mb-2">MAIN PURPOSES</h5>
            <ul className="flex flex-col text-tertiary-100 font-semibold gap-y-3">
              <li className="flex justify-center items-center gap-x-3 w-fit">
                <Icon name="tick" fillColor="secondary" strokeColor="none" size="extraLarge" />
                Facilitate real-time collaboration among remote engineering teams through shared workspaces and visual task mapping.</li>
              <li className="flex justify-center items-center gap-x-3 w-fit">
                <Icon name="tick" fillColor="secondary" strokeColor="none" size="extraLarge" />
                Enhance productivity by integrating project management tools with communication features tailored for technical workflows.</li>
              <li className="flex justify-center items-center gap-x-3 w-fit">
                <Icon name="tick" fillColor="secondary" strokeColor="none" size="extraLarge" />
                Provide a centralized platform for code reviews, documentation, and version control to streamline development processes.</li>
            </ul>
          </div>
          </SectionContainer>
          <SectionContainer
          barTitle="EXTRACTED FEATURES"
          barColor="white"
          BarLabel={<label className="text-xxs font-bold text-gray-300 text-mono"> 12 FEATURES FOUND</label>}>

          </SectionContainer>
        </aside>
        <aside className="w-2/5 lg:w-1/4 flex flex-col gap-y-9">
          <div className="flex flex-col w-full p-8 bg-white rounded-xl items-center justify-center gap-y-6 drop-shadow-black-op shadow-black-op-200 shadow-2xl">
            <h5 className="text-tertiary-100 font-mono ">UNBUNDLING SCORE</h5>
            <span className="w-1/2 h-30 bg-primary-200 rounded-full"></span>
            <p className="text-tertiary-100 text-center"> High potential of micro-SaaS extraction</p>
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
    </>
  )
}