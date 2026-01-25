
interface ISectionHeaderProps {
  title: string;
  subtitle?: string;
  size?: 'small' | 'medium' | 'large';
  el?: 'header' | 'div';
}

export default function SectionHeader({
  title,
  subtitle = '',
  size = 'medium',
  el = 'header'
  }: ISectionHeaderProps) {
    const sizeClasses = {
      small: 'text-lg',
      medium: 'text-2xl',
      large: 'text-4xl' 
    }

    const styleClass = 'mb-6 w-full flex flex-col px-8 pt-8'

    return (el === 'header') ? (
        <header className={styleClass}>
          <h2 className={`${sizeClasses[size]} font-bold text-primary-100`}>{title}</h2>
          {subtitle && (
            <p className="text-tertiary-200 mt-2">{subtitle}</p>
          )}
        </header>
      ) : (
        <div className={styleClass}>
          <h2 className={`${sizeClasses[size]} font-bold text-primary-100`}>{title}</h2>
          {subtitle && (
            <p className="text-tertiary-200 mt-2">{subtitle}</p>
          )}
        </div>
      );
  }