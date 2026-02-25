import { Icon } from "../icons/Icon";

export default function BluePrintButton () {
  return (
    <button className="sticky bottom-3 mx-3 xxs:mx-0 left-0 md:relative flex justify-center items-center gap-x-3 bg-secondary-200 hover:bg-primary-100 text-primary-100 transition-colors rounded-lg p-4 mt-4 font-mono font-bold hover:cursor-pointer hover:text-secondary-200 active:text-secondary-100 drop-shadow-black-op shadow-black-op-100 shadow-2xl">
      <Icon name="rocket" fillColor="current" size="large" />
      GENERATE BLUEPRINT
    </button>
  );
}