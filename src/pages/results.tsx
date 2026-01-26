import type { PropsWithChildren } from "react";
import Navbar from "../components/ui/navbar";
import SectionContainer from "../components/ui/section-container";
import SectionHeader from "../components/ui/header";
import Tags from "../components/Tags";
import { Icon } from "../components/icons/Icon";

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
        <SectionContainer 
          barTitle="APP SUMMARY"
          BarLabel={<Label>VERIFIED ANALYSIS</Label>}
          >
          <SectionHeader el="div" title="Project Nexus" size="medium" subtitle="A collaborative productivity suite focused on hyper-local team synchronization and visual task mapping for remote-first engineering teams."/>
          <Tags tags={["PRODUCTIVITY", "COLLABORATION", "B2B SAAS"]}/>
          <hr className="border-gray-200 w-full my-4"/>
          <div className="flex flex-col w-full">
            <h5 className="font-mono text-gray-400 text-xs font-semibold mb-2">MAIN PURPOSES</h5>
            <ul className="flex flex-col text-tertiary-100 gap-y-3">
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
        <div className="flex flex-col w-2/5 lg:w-1/4 p-8 bg-white rounded-xl items-center justify-center gap-y-6 drop-shadow-black-op shadow-black-op-200 shadow-2xl">
          <h5 className="text-tertiary-100 font-mono ">UNBUNDLING SCORE</h5>
          <span className="w-1/2 h-30 bg-primary-200 rounded-full"></span>
          <p className="text-tertiary-100 text-center"> High potential of micro-SaaS extraction</p>
        </div>
      </div>
    </>
  )
}