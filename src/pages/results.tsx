
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
import PublicPerception from "../components/results/public-perception";
import NotableAssumptions from "../components/results/notable-asumptions";
import useFetch from "../hooks/useFetch";
import type{ IAnalyzeResult } from "../services/types";


export default function Results() {


  // REWRITE API MERGE, API RESPONSE DOESN'T MATCH THE DEFINED TYPE, NEEDS REWORK

  const { data: app, loading} = useFetch<IAnalyzeResult>("http://localhost:8000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: "Spotify" }),
  })

  return (
    <>
      <Navbar/>
      {
        loading ?
        <span>Loading...</span>
        :
        <div className="flex w-full flex-col md:flex-row pt-32 md:pt-48 justify-center xxs:px-4 gap-8 max-w-8xl">
          <aside className="w-full lg:w-3/5 flex flex-col gap-y-9">
            <AppSummary {...(app as IAnalyzeResult).parsed}/>
            <Features features={(app as IAnalyzeResult).parsed.features} />
            <BluePrintButton/>
          </aside>
          <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-y-9 [&>span.alert]:rounded-none [&>span.alert]:xxs:rounded-xl">
            <ScoreCard value={78} description="High potential of micro-SaaS extraction"/>
            <PublicPerception data={(app as IAnalyzeResult).parsed.publicPerception} />
            <NotableAssumptions data={(app as IAnalyzeResult).parsed.notableAssumptions}/>
            <QuickActions/>
            <Alert
              type="info"
              title="ANALYSIS ENGINE"
              message="Deconstructed using UnbundleAi API with architectectural Huggin Face inference model. Analysis completed in 4.2s."
            />
          </aside>
      </div>
      }
      <Footer/>
    </>
  )
}