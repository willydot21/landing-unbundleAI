import { Icon } from "../icons/Icon";

export default function AnalyzeInput() {
  return (
    <div className="flex flex-row justify-between bg-white p-2 items-center rounded-xl shadow-black-op shadow-2xl w-full max-w-2xl">
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