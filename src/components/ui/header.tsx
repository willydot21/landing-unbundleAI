
interface ISectionHeaderProps {
  title: string;
  subtitle?: string;
  size?: 'small' | 'medium' | 'large';
  el?: 'header' | 'div';
}

const Title = ({ title, subtitle, size }: { title: string; subtitle?: string; size: 'small' | 'medium' | 'large' }) => {
  const titleSizes = {
    small: 'text-lg lg:text-xl xl:text-2xl',
    medium: 'text-2xl lg:text-3xl xl:text-4xl',
    large: 'text-4xl lg:text-5xl xl:text-6xl'
  };
  const subtitleSizes = {
    small: 'text-xs lg:text-sm xl:text-base',
    medium: 'text-sm lg:text-base xl:text-lg',
    large: 'text-lg lg:text-xl xl:text-2xl'
  };
  return (
    <>
      <h2 className={`${titleSizes[size]} font-bold text-primary-100`}>{title}</h2>
      {subtitle && (
        <p className={`${subtitleSizes[size]} text-tertiary-200 mt-2`}>{subtitle}</p>
      )}
    </>
  );
}

export default function SectionHeader({
  title,
  subtitle = '',
  size = 'medium',
  el = 'header'
  }: ISectionHeaderProps) {

    const styleClass = 'mb-6 w-full flex flex-col'

    return (el === 'header') ? (
        <header className={styleClass}>
          <Title title={title} subtitle={subtitle} size={size} />
        </header>
      ) : (
        <div className={styleClass}>
          <Title title={title} subtitle={subtitle} size={size} />
        </div>
      );
  }