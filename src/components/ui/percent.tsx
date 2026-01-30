
export default function Percent({ value }: { value: number }) {
  const percentage = Math.min(Math.max(value, 0), 100);
  return (
    <div className="relative size-40">
      <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" stroke-width="2"></circle>
        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-secondary-200" stroke-width="2" stroke-dasharray="100" stroke-dashoffset={100 - percentage} stroke-linecap="round"></circle>
      </svg>
      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-5xl font-extrabold text-primary">{percentage}</span>
        <p className="text-center text-gray-400">PTS</p>
      </div>
  </div>
  );
}