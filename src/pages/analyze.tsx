import AnalyzeInput from "../components/hero/analyze-input";
import Layout from "./layout";

const Hero = () => {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center  gap-y-7 max-w-3xl self-center">
      <h1 className="font-extrabold text-5xl lg:text-6xl xl:text-7xl text-center">Deconstruct any app.</h1>
      <h5 className="font-semibold  text-tertiary-100 text-center">
        Instantly break down applications into core features, user flows, and tech stacks using Ai. Simplified for clarity.
      </h5>
      <AnalyzeInput/>
      <div className="flex justify-center flex-col items-center gap-y-3">
        <h5 className="text-sm text-tertiary-100 font-mono"> TRY AN EXAMPLE:</h5>
        <div className="flex flex-wrap justify-center sm:flex-nowrap flex-row gap-4 gap-y-2 mt-2">
          <button className="bg-primary-100 text-white rounded-full px-4 py-1 text-xs sm:text-sm hover:bg-primary-200 hover:cursor-pointer">Shopify Checkout</button>
          <button className="bg-primary-100 text-white rounded-full px-4 py-1 text-xs sm:text-sm hover:bg-primary-200 hover:cursor-pointer">Linear App</button>
          <button className="bg-primary-100 text-white rounded-full px-4 py-1 text-xs sm:text-sm hover:bg-primary-200 hover:cursor-pointer">Uber Ride Share</button>
        </div>
      </div>
    </div>
  );
}

export default function Analyze() {
  return (
    <Layout>
      <Hero/>
    </Layout>
  );
}