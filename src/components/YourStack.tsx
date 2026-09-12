import type { Technology } from '../types/technology'

interface Props {
    stack: Technology[]
    onRemove: (id: string) => void
    onRemoveAll: () => void
}

export default function YourStack({ stack, onRemove, onRemoveAll }: Props) {
    return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-20">
        
      {/* Header */}
        <div className="mb-4">
        <h2 className="font-bold text-gray-800 text-xl">Your Stack</h2>
        {stack.length === 0 ? (
            <p className="text-sm text-gray-400 mt-1">
            No technologies selected yet.
            </p>
        ) : (
            <p className="text-sm font-semibold mt-1 brand-gradient-text">
            {stack.length} Technology Selected
            </p>
        )}
        </div>

      {/* Empty State */}
        {stack.length === 0 ? (
        <div className="border border-gray-100 rounded-xl p-8 text-center bg-gray-50">
            <p className="text-sm text-gray-300">Your stack is empty.</p>
        </div>
        ) : (
        <div className="flex flex-col gap-3">
          {/* Stack Items */}
            {stack.map(tech => (
            <div
                key={tech.id}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm"
            >
                <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 object-contain"
                />
                <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm truncate">
                    {tech.name}
                </p>
                <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
                <button
                onClick={() => onRemove(tech.id)}
                className="text-gray-300 hover:text-red-500 transition-colors font-bold"
                >
                ✕
                </button>
            </div>
            ))}

          {/* Remove All */}
            <button
            onClick={onRemoveAll}
            className="mt-2 w-full py-2 text-sm font-semibold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
            >
            Remove All
            </button>
        </div>
        )}
    </div>
    )
}