import { type PropsWithChildren } from "react";
import Logo from "./components/icons/logo";
import { SocialIcon } from "./components/icons/social";
import { Icon } from "./components/icons/Icon";
import Navbar from "./components/ui/navbar";
import Blueprints from "./components/prints";

interface IBluePrintProps extends PropsWithChildren {
  iconName: 'cart' | 'dash' | 'ride';
  title: string;
  description: string;
  version: string; 
}

interface IFeature extends PropsWithChildren {
  title: string;
  description: string;
}

interface IExample extends PropsWithChildren {
  name: string;
  feature: string;
}

const prints = [
  {title: 'E-commerce', description: "Complete breakdown of Shopify's checkout process including payment gateway integration", version: 'v1.2', iconName: 'cart' as IBluePrintProps['iconName']},
  {title: 'SaaS Dashboard', description: "Architecture analysis of Linear's issue tracking system and real-time sync engine", version: 'v2.0', iconName: 'dash' as IBluePrintProps['iconName']},
  {title: 'Ride Share', description: "Pricing alghorithm and driver matching logic summary for location-based services.", version: 'v1.0', iconName: 'ride' as IBluePrintProps['iconName']},
]

const samples = [{name:'Notion', feature: 'Docs & Wiki Logic'}, {name:'Duolingo', feature:'Gamification Engine'}, {name:'Strava', feature:'Social Graph'}];

const Features = ({ children }: PropsWithChildren) => {
  return ( 
    <div className="flex flex-row gap-4 xxs:gap-8 pt-4">
      {children}
    </div>
  );
}

const Feature = ({title, description, children}: IFeature) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <span className="w-9 h-9 bg-white rounded-full p-1">
        {children}
      </span>
      <div>
        <h6 className="text-primary-100 font-bold text-xs sm:text-sm md:text-base">{title}</h6>
        <p className="text-tertiary-100 text-xs lg:text-base hidden xxs:block">{description}</p>
      </div>
    </div>
  )
}

const AnalyzeInput = () => {

  return (
    <div className="flex flex-row justify-between bg-white p-2 items-center rounded-xl shadow-black-op shadow-2xl">
      <div className="flex flex-row items-center justify-center gap-x-2.5 w-full">
        <Icon name="link" classes="mx-3" /> 
        <input type="text" className="w-full focus:outline-0 placeholder-shown:text-ellipsis pr-2" placeholder="Paste URL or describe an app..."/>
      </div>
      <button className="flex flex-row gap-2.5 items-center justify-center  text-primary-100 font-semibold bg-secondary-200 p-4 lg:px-7 lg:py-3 rounded-xl hover:cursor-pointer hover:bg-primary-100 hover:text-secondary-200">
        <Icon name="wand" classes="w-6 h-6 hidden lg:block" strokeColor="current" />
        <Icon name="dir_right" classes="w-6 h-6 lg:hidden" fillColor="current"  />
        <span className="lg:block hidden">Deconstruct</span>
      </button>
    </div>
  )
}

const Example = ({name, feature}: IExample) => {
  const firstLetter = name[0].toUpperCase();
  return (
    <div className="flex flex-row justify-between items-center bg-secondary-50 border border-gray-300 rounded-xl">
      <div className="flex flex-row justify-between items-center gap-4 p-4">
        <span className="w-10 h-10 border border-gray-300 bg-white rounded-lg flex items-center justify-center font-bold text-primary-100">
          {firstLetter}
        </span>
        <div>
          <h5 className="text-primary-100 font-bold text-sm">{name}</h5>
          <p className="text-gray-400 text-xs font-semibold">{feature}</p>
        </div>
      </div>
      <Icon name="arrow_right" strokeColor="gray_400" size="large"/>
    </div>
  );
}

const Examples = () => {
  return (
    <section className="flex flex-col gap-y-2 h-fit bg-white rounded-xl shadow-black-op shadow-2xl w-full md:w-5/6 lg:w-4/6 xl:w-1/3 py-7 px-4 lg:px-8">
      <header className="flex flex-row justify-between items-center">
        <h5 className="flex flex-row text-primary-100 font-bold gap-1">
          <Icon name="flash" size="large" strokeColor="secondary"/>
          Quick Start
        </h5>
        <h4 className="text-gray-400 font-bold text-xs">
          EXAMPLES
        </h4>
      </header>
      <hr className="text-gray-200"/>
      <div className="flex flex-col gap-3 py-7">
        {samples.map(el => <Example {...el}/>)}
      </div>
      <button className="flex flex-row font-semibold group justify-center items-center p-2 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 gap-1 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-400">
        <Icon name="add" fillColor="current" size="medium"/>
        Analyze Custom App
      </button>
    </section>
  );
}

export const Footer = () => {
  return (
    <footer className="mt-32 flex flex-col sm:flex-row sm:justify-between w-full items-center bg-primary-100 px-8 py-8 xl:px-28 xl:py-14 gap-12">
      <div className="flex flex-row gap-2 min-w-fit">
        <Logo dark={true} />
        <div className="flex flex-col gap-1">
          <h5 className="font-bold text-white text-md">
            Unbundle Ai
          </h5>
          <p className="text-white text-xs">
            Productivity Intelligence
          </p>
        </div>
      </div>
      <ul className="flex flex-row flex-wrap md:justify-between items-center gap-10 justify-center">
        <li><a href="" className="text-white text-sm hover:cursor-pointer hover:text-secondary-200"> Privacy Policy </a></li>
        <li><a href="" className="text-white text-sm hover:cursor-pointer hover:text-secondary-200"> Terms of Service</a></li>
        <li><a href="" className="text-white text-sm hover:cursor-pointer hover:text-secondary-200"> API Documentation</a></li>
        <li><a href="" className="text-white text-sm hover:cursor-pointer hover:text-secondary-200"> Support </a></li>
      </ul>
      <div className="flex flex-row items-center gap-4">
        <SocialIcon platform="twitter" altText="Logo Twitter"/>
        <SocialIcon platform="github" altText="Logo Github"/>
      </div>
    </footer>
  ) 
}

const ActionHero = () => {
  return (
  <div className="flex flex-col md:flex-row gap-8 lg:gap-16 py-24 mt-24 justify-between">
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
        <Feature title="Deep Deconstruction" description="Identify tech stack & features">
          <Icon name="stats" fillColor="primary" size="large"/>
        </Feature>
        <Feature title="Actionable Blueprints" description="Spec docs & reports">
          <Icon name="tasks" strokeColor="primary" size="large"/>
        </Feature>
      </Features>
    </div>
    <Examples/>
  </div>
  );
}

function App() {

  return( 
    <>
      <div className="flex flex-col w-full py-5 px-3 md:px-10 max-w-8xl">
        <Navbar />
        <ActionHero/>
        <hr className="text-gray-300"/>
        <Blueprints prints={prints}/>
      </div>
      <Footer/>
    </> 
  )
}

export default App

