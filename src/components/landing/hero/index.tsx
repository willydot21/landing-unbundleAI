import Examples from "../examples";
import Features from "../features";
import FeatureCard, { type IFeatureInfo } from "../features/feature-card";
import AnalyzeInput from "./analyze-input";

const features = [
  { title: 'Deep Deconstruction', description: 'Identify tech stack & features', iconName: 'stats' as IFeatureInfo['iconName'] },
  { title: 'Actionable Blueprints', description: 'Spec docs & reports', iconName: 'tasks' as IFeatureInfo['iconName'] }
]

const samples = [{name:'Notion', feature: 'Docs & Wiki Logic'}, {name:'Duolingo', feature:'Gamification Engine'}, {name:'Strava', feature:'Social Graph'}];

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-16 py-24 md:mt-10 justify-between">
      <div className="flex flex-col gap-6">
        <span className="flex flex-row max-w-fit gap-2 items-center bg-white px-2 py-1 rounded-full border-2 border-t-0 border-l-0 border-black-op-100">
          <span className="w-2 h-2 bg-secondary-200 rounded-full"> </span>
          <strong className="text-xxs font-extrabold"> AI-POWERED ANALYSIS V2.0</strong>
        </span>
        <h1 className="font-extrabold text-5xl lg:text-6xl xl:text-7xl">Deconstruct apps.
          <br />
          <span className="text-secondary-200 underline"> Generate Blueprints.</span>
        </h1>
        <h5 className="font-semibold  text-tertiary-100">
          Instantly break down applications into core features, user flows, and tech stacks using Ai. Simplified for clarity.
        </h5>
        <AnalyzeInput/>
        <Features>
          {features.map(el => <FeatureCard {...el} />)}
        </Features>
      </div>
      <Examples samples={samples}/>
    </div>
  );
}