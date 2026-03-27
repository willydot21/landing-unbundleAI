
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
import type { IAnalyzeResult } from "../services/types";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getLocalResult } from "../services/local-unbundle";


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
  const id = params.id;

  const [app, setApp] = useState<IAnalyzeResult | null>(null);
  const [loadingRemote, setLoadingRemote] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No result ID provided. Analyze an app first to see the results.");
      setLoadingRemote(false);
      return;
    }

    const local = getLocalResult(id);
    if (local) {
      setApp(local);
      setLoadingRemote(false);
      return;
    }

    setError("No saved analysis found for this ID. Try describing an app and deconstructing it first.");
    setLoadingRemote(false);
  }, [id]);

  // TODO: Add error handling and loading states for better UX during data fetching and processing, 
  // and refactor the data parsing logic to be more robust and handle edge cases in the API response structure.

  const getScoreDescription = (score: number) => {
    if (score >= 80) return "High unbundling potential";
    if (score >= 55) return "Good opportunity for a focused MVP";
    return "Consider narrowing scope for a stronger product fit";
  };

  return (
    <>
      <Navbar />
      {
        loadingRemote ?
        <SkeletonResults />
        : !app ?
        <div className="flex w-full min-h-[70vh] items-center justify-center px-4 pt-32">
          <div className="max-w-xl w-full bg-white rounded-3xl p-10 shadow-black-op shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Resultado no encontrado</h2>
            <p className="text-gray-500 mb-6">{error || "No hay un análisis guardado para este identificador."}</p>
            <a href="/analyze" className="inline-flex px-6 py-3 bg-primary-100 text-white rounded-full font-semibold hover:bg-primary-200">Volver a analizar</a>
          </div>
        </div>
        :
        <div className="flex w-full flex-col md:flex-row pt-32 md:pt-48 justify-center xxs:px-4 gap-8 max-w-8xl">
          <aside className="w-full lg:w-3/5 flex flex-col gap-y-9">
            <AppSummary {...app} />
            <Features features={app.features} />
            <BluePrintButton />
          </aside>
          <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-y-9 [&>span.alert]:rounded-none [&>span.alert]:xxs:rounded-xl">
            <ScoreCard value={app.score ?? 0} description={getScoreDescription(app.score ?? 0)} />
            <PublicPerception data={app.publicPerception} />
            <NotableAssumptions data={app.notableAssumptions} />
            <QuickActions />
            <Alert
              type="info"
              title="ANALYSIS ENGINE"
              message="Deconstructed locally in the browser with heuristics and persisted in localStorage."
            />
          </aside>
        </div>
      }
      <Footer />
    </>
  )
}
