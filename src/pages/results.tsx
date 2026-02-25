
/**
 * TODO:
 *  -- Refactor buttons and interactive elements into reusable components
 *  -- Add loading states and error handling for API interactions
 */

import Navbar from "../components/ui/navbar";
import Alert from "../components/ui/alert";
import Footer from "../components/ui/footer";
import Features from "../components/results/features";
import AppSummary from "../components/results/summary";
import QuickActions from "../components/results/quick-actions";
import ScoreCard from "../components/results/score-card";
import BluePrintButton from "../components/results/blueprint-button";


const features = [
  {name: "Real-time Node Editor", category: "CORE INTERFACE", description: ""},
  {name: "Contextual AI Assistant", category: "AUTOMATION", description: ""},
  {name: "SSO & Auth Integration", category: "SECURITY", description: ""}
];

const app = {
  name: "Project Nexus",
  description: "A collaborative productivity suite focused on hyper-local team synchronization and visual task mapping for remote-first engineering teams.",
  tags: ["PRODUCTIVITY", "COLLABORATION", "B2B SAAS"],
  purposes: [
    "Facilitate real-time collaboration among remote engineering teams through shared workspaces and visual task mapping.",
    "Enhance productivity by integrating project management tools with communication features tailored for technical workflows.",
    "Provide a centralized platform for code reviews, documentation, and version control to streamline development processes."
  ]
}

export default function Results() {
  return (
    <>
      <Navbar/>
      <div className="flex w-full flex-col md:flex-row pt-32 md:pt-48 justify-center xxs:px-4 gap-8 max-w-8xl">
        <aside className="w-full lg:w-3/5 flex flex-col gap-y-9">
          <AppSummary {...app}/>
          <Features features={features}/>
          <BluePrintButton/>
        </aside>
        <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-y-9 [&>span.alert]:rounded-none [&>span.alert]:xxs:rounded-xl">
          <ScoreCard value={78} description="High potential of micro-SaaS extraction"/>
          <QuickActions/>
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