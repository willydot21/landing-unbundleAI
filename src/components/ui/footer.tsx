
import Logo from "../icons/logo";
import { SocialIcon } from "../icons/social";

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