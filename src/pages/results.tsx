
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
import type{ IAnalyzeResult, IApiAnalyzeResult } from "../services/types";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { analyzeApp, mockData } from "../services/unbundle-api";


const SkeletonResults = () => {
  return (
    <div className="flex w-full flex-col md:flex-row pt-32 md:pt-48 justify-center xxs:px-4 gap-8 max-w-8xl">
      <aside className="w-full lg:w-3/5 flex flex-col gap-y-9">
        <div className="w-full min-h-4/12 bg-gray-300 animate-pulse rounded-xl"/>
        <div className="w-full min-h-4/12 bg-gray-300 animate-pulse rounded-xl"/>
        <div className="w-full min-h-16 bg-gray-300 animate-pulse rounded-xl"/>
      </aside>
      <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-y-9 [&>span.alert]:rounded-none [&>span.alert]:xxs:rounded-xl">
        <div className="w-full min-h-80 bg-gray-300 animate-pulse rounded-xl"/>
        <div className="w-full min-h-80 bg-gray-300 animate-pulse rounded-xl"/>
        <div className="w-full min-h-64 bg-gray-300 animate-pulse rounded-xl"/>
        <div className="w-full min-h-64 bg-gray-300 animate-pulse rounded-xl"/>
        <div className="w-full min-h-40 bg-gray-300 animate-pulse rounded-xl"/>
      </aside>

    </div>
  )
}

export default function Results() {


  const params = useParams();
  const id = params.id || "youtube";
  const [url, options] = analyzeApp(id) as [string, RequestInit];
  const { data, loading} = useFetch<IApiAnalyzeResult>(url, options);

  const [app, setApp] = useState<IAnalyzeResult | null>(null);

  useEffect(() => {
    if (data) {
      setApp(mockData(data as IApiAnalyzeResult));
    }
  }, [data]);

  // TODO: Add error handling and loading states for better UX during data fetching and processing, 
  // and refactor the data parsing logic to be more robust and handle edge cases in the API response structure.

  return (
    <>
      <Navbar/>
      {
        (loading || !app) ?
        <SkeletonResults/>
        :
        <div className="flex w-full flex-col md:flex-row pt-32 md:pt-48 justify-center xxs:px-4 gap-8 max-w-8xl">
          <aside className="w-full lg:w-3/5 flex flex-col gap-y-9">
            <AppSummary {...(app as IAnalyzeResult)}/>
            <Features features={(app as IAnalyzeResult).features} />
            <BluePrintButton/>
          </aside>
          <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-y-9 [&>span.alert]:rounded-none [&>span.alert]:xxs:rounded-xl">
            <ScoreCard value={78} description="High potential of micro-SaaS extraction"/>
            <PublicPerception data={(app as IAnalyzeResult).publicPerception} />
            <NotableAssumptions data={(app as IAnalyzeResult).notableAssumptions}/>
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