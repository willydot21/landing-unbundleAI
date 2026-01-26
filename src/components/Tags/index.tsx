
export default function Tags({tags}: {tags: string[]}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="bg-gray-200 text-tertiary-100 font-mono font-semibold px-3 py-1 rounded-full text-xs border border-gray-300">
          {tag}
        </span>
      ))}
    </div>
  )
}