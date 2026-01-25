import type { PropsWithChildren } from "react";
import Navbar from "../components/ui/navbar";
import SectionContainer from "../components/ui/section-container";
import SectionHeader from "../components/ui/header";

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
      <div className="flex w-full pt-24 justify-center px-4 gap-8 max-w-8xl">
        <SectionContainer 
          barTitle="APP SUMMARY"
          BarLabel={<Label>VERIFIED ANALYSIS</Label>}
          >
          <SectionHeader el="div" title="Project Nexus" size="large" subtitle="A collaborative productivity suite focused on hyper-local team synchronization and visual task mapping for remote-first engineering teams."/>
        </SectionContainer>
        <div className="flex flex-col w-2/5 lg:w-1/4 p-8 bg-white rounded-xl items-center justify-center gap-y-6">
          <h5 className="text-tertiary-100 font-mono ">UNBUNDLING SCORE</h5>
          <span className="w-1/2 h-30 bg-primary-200 rounded-full"></span>
          <p className="text-tertiary-100 text-center"> High potential of micro-SaaS extraction</p>
        </div>
      </div>
    </>
  )
}