import { Icon, type IconProps } from "../icons/Icon";

export interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
}

export default function Alert({ message, type, title }: AlertProps) {

  const typeStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-gray-200 border-gray-300 text-gray-400',
  }

  return (
    <span className={`flex flex-col gap-4 border rounded-xl p-6 ${typeStyles[type]}`}>
      <h5>
        <Icon name={type as IconProps['name']} strokeColor="gray_400" size="medium"/>
        <strong className="font-bold text-sm font-mono">{title}</strong> 
      </h5>
      <p className="text-xs">{message}</p>
    </span>
  )
}