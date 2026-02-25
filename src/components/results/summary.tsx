import type { PropsWithChildren } from "react";
import Tags from "../Tags";
import SectionHeader from "../ui/header";
import Hr from "../ui/Hr";
import SectionContainer from "../ui/section-container";
import Purposes from "./purposes";

interface ISummaryProps {
  name: string;
  description: string;
  tags: string[];
  purposes: string[];
}

const Label = ({children}: PropsWithChildren) => {
  return (
    <span className="bg-warning-50 rounded-sm text-xxs font-bold h-fit px-2">
      {children}
    </span>
  );
}

export default function AppSummary({name, description, tags, purposes}: ISummaryProps) {
  return (
    <SectionContainer 
      barTitle="APP SUMMARY"
      BarLabel={<Label>VERIFIED ANALYSIS</Label>}
    >
      <SectionHeader el="div" title={name} size="medium" subtitle={description}/>
      <Tags tags={tags}/>
      <Hr my="3" />
      <Purposes purposes={purposes}/>
    </SectionContainer>
  )
}