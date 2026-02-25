import Percent from "../ui/percent";

export default function Score({ value, description }: { value: number, description: string }) {
  return (
    <div className="flex flex-col w-full p-8 bg-white xxs:rounded-xl items-center justify-center gap-y-6 drop-shadow-black-op shadow-black-op-100 shadow-2xl">
      <h5 className="text-gray-400 font-mono ">UNBUNDLING SCORE</h5>
      <Percent value={value}/>
      <p className="text-gray-500 font-semibold text-center"> {description}</p>
    </div>
  )
}