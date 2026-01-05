import {useRef, type PropsWithChildren } from "react";
import Logo from "./components/icons/logo";
import { SocialIcon } from "./components/icons/social";
import { Icon } from "./components/icons/Icon";
import useNavbar from "./hooks/useNavbar";
import MenuButton from "./components/icons/menu";

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
      <span className="w-9 h-9 bg-white rounded-full p-2">
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

const Navbar = () => {

  // TODO : ADD SCROLL EFFECTS
  // TODO : ADD RESPONSIVE MENU
  // TODO : ADD ACTIVE LINK STYLES
  // TODO : FIX HAMBURGER MENU

  const { menuOpen, setMenuOpen, scrolled, setScrolled } = useNavbar();

  return (
    <nav className="flex w-full items-center justify-between backdrop-blur-md fixed left-0 top-0 mx-auto p-6 z-50 [&.scroll]:bg-white/50 [&.scroll]:border-b [&.scroll]:border-b-gray-200 [&.scroll]:py-4 [&.scroll]:shadow-3xl transition-all ease-in-out duration-300">
      <aside className="flex items-center gap-x-3"> 
        <Logo dark={false} />
        <strong>Unbundle Ai</strong>
      </aside>
      <ul className="flex text-tertiary-100 gap-x-7">
        <li><a href="#" className="hover:text-primary-100 font-semibold">Deconstruct</a></li>
        <li><a href="#" className="hover:text-primary-100 font-semibold">Blueprints</a></li>
        <li><a href="#" className="hover:text-primary-100 font-semibold">History</a></li>
      </ul>
      <ul className="flex gap-x-7">
        <li><a href="#" className="hover:text-primary-200 font-semibold">Log in</a></li>
        <li><a href="#" className="hover:bg-primary-200 font-semibold text-white bg-primary-100 px-6 py-2 rounded-xl shadow-black-op shadow-lg">Start Free</a></li>
      </ul>
      <MenuButton state={menuOpen} click={() => setMenuOpen(!menuOpen)} />
    </nav>
  );
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
  <div className="flex flex-col md:flex-row gap-8 lg:gap-16 py-24 justify-between">
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
          <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="var(--color-primary-100)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Stats</title> <g id="Stats" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect id="Container" x="0" y="0" width="24" height="24"> </rect> <path d="M6,4 L18,4 C19.1045695,4 20,4.8954305 20,6 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,6 C4,4.8954305 4.8954305,4 6,4 Z" id="shape-1" stroke="var(--color-primary-100)" stroke-width="2" stroke-linecap="round" stroke-dasharray="0,0"> </path> <line x1="7.99991122" y1="17" x2="8" y2="11" id="shape-2" stroke="var(--color-primary-100)" stroke-width="2" stroke-linecap="round" stroke-dasharray="0,0"> </line> <line x1="11.9999112" y1="17" x2="12" y2="8" id="shape-3" stroke="var(--color-primary-100)" stroke-width="2" stroke-linecap="round" stroke-dasharray="0,0"> </line> <line x1="15.9999112" y1="17" x2="16" y2="14" id="shape-4" stroke="var(--color-primary-100)" stroke-width="2" stroke-linecap="round" stroke-dasharray="0,0"> </line> </g> </g></svg> 
        </Feature>
        <Feature title="Actionable Blueprints" description="Spec docs & reports">
          <svg fill="var(--color-primary-100)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-13.8 -13.8 119.60 119.60" enable-background="new 0 0 92 92" stroke="var(--color-primary-100)" stroke-width="0.00092"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1973_" d="M25,17.8V5c0-2.8,2.2-5,5-5s5,2.2,5,5v12.8c0,2.8-2.2,5-5,5S25,20.6,25,17.8z M62,22.8c2.8,0,5-2.2,5-5V5 c0-2.8-2.2-5-5-5s-5,2.2-5,5v12.8C57,20.6,59.2,22.8,62,22.8z M28.2,40h35.5c2.2,0,4-1.8,4-4s-1.8-4-4-4H28.2c-2.2,0-4,1.8-4,4 S26,40,28.2,40z M84,7h-8.3c-2.2,0-4,1.8-4,4s1.8,4,4,4H80v68H12V15h4.3c2.2,0,4-1.8,4-4s-1.8-4-4-4H8c-2.2,0-4,2.2-4,4.4V87 c0,2.2,1.8,4,4,4h76c2.2,0,4-1.8,4-4V11.4C88,9.2,86.2,7,84,7z M42.7,15h6.6c2.2,0,4-1.8,4-4s-1.8-4-4-4h-6.6c-2.2,0-4,1.8-4,4 S40.5,15,42.7,15z M28.2,58h35.5c2.2,0,4-1.8,4-4s-1.8-4-4-4H28.2c-2.2,0-4,1.8-4,4S26,58,28.2,58z"></path> </g></svg>
        </Feature>
      </Features>
    </div>
    <Examples/>
  </div>
  );
}

const PrintCard = ({ iconName, title, description, version }: IBluePrintProps) => {
  return (
    <div className="bg-white p-5 rounded-xl flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h5 className="flex flex-row gap-3 text-primary-100 font-bold items-center">
          <span className="flex bg-secondary-50 p-1 rounded-xl"><Icon name={iconName} strokeColor="primary" classes="w-8 h-8"/></span>
          {title}
        </h5>
        <p className="text-primary-100 font-bold text-xs bg-gray-100 p-1 px-2 rounded-xl">
          {version}
        </p>
      </div>
      <p className="text-tertiary-100"> {description}</p>
      <a className="text-secondary-200 font-bold text-sm hover:cursor-pointer hover:text-secondary-100"> VIEW SUMMARY </a>
    </div>
  );
}

const Blueprints = () => {
  return (
    <section className="flex flex-col w-full gap-y-9 pt-9">

      <header className="flex flex-row justify-between items-end">
        <div>
          <h4 className="text-primary-100 font-bold text-lg">
            Recent Blueprints
          </h4>
          <p className="text-gray-500 text-sm font-semibold">
            Pick up where you left off.
          </p>
        </div>
        <a className="text-primary-100 font-xs flex hover:cursor-pointer hover:text-primary-200">
          View all history
          <Icon name="dir_right" classes="w-6 h-6 pt-1" fillColor="current"/>
        </a> 
      </header>
      <div className="grid grid-cols-(--autofit-min) gap-3">
        {prints.map(PrintCard)}
      </div>
    </section>
  )
}

function App() {

  return( 
    <>
      <div className="flex flex-col w-full py-5 px-3 md:px-10 max-w-8xl">
        <Navbar />
        <ActionHero/>
        <hr className="text-gray-300"/>
        <Blueprints/>
      </div>
      <Footer/>
    </> 
  )
}

export default App

