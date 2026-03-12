import SectionContainer from "../ui/section-container";

export default function NotableAssumptions({data}: {data:string[]}) {
  return (
    <SectionContainer
      barTitle="NOTABLE ASSUMPTIONS"
      barColor="white"
      padding="small">
        <ul className="flex flex-wrap gap-3">
          {
            data.map((item, _) => (
              <li key={_} className="bg-gray-100 text-gray-500 font-mono font-semibold px-3 py-1 rounded text-xs border border-gray-300">
                {item.toUpperCase()}
              </li>
            ))
          }
        </ul>
    </SectionContainer>
  );
}