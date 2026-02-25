export default function Features({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-row gap-4 xxs:gap-8 pt-4">
      {children}
    </div>
  );
}