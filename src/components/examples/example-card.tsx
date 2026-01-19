import { Icon } from "../icons/Icon";

export interface IExample {
  name: string;
  feature: string;
}

export default function ExampleCard({name, feature}: IExample){
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