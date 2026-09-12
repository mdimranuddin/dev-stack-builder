import type { Technology } from '../types/technology'

interface Props {
    tech: Technology
    onAdd: (tech: Technology) => void
    isAdded: boolean
}

export default function TechCard({ tech, onAdd, isAdded }: Props) {
    const getBadgeStyle = (badge: string) => {
        const styles: Record<string, string> = {
            'Popular':     'bg-blue-50 text-blue-500 border-blue-200',
            'Versatile':   'bg-green-50 text-green-500 border-green-200',
            'Fast':        'bg-orange-50 text-orange-500 border-orange-200',
            'Standard':    'bg-gray-50 text-gray-500 border-gray-200',
            'Top SQL':     'bg-blue-50 text-blue-600 border-blue-200',
            'Cache':       'bg-red-50 text-red-500 border-red-200',
            'Ubiquitous':  'bg-yellow-50 text-yellow-600 border-yellow-200',
            'Essential':   'bg-purple-50 text-purple-500 border-purple-200',
            'Modern':      'bg-cyan-50 text-cyan-500 border-cyan-200',
            'Containers':  'bg-sky-50 text-sky-500 border-sky-200',
            'Robust':      'bg-orange-50 text-orange-600 border-orange-200',
        }
        return styles[badge] || 'bg-gray-50 text-gray-500 border-gray-200'
}
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 hover:shadow-xl transition-shadow">
        {/* Icon + Badge */}
        <div className="flex items-center justify-between">
            <img
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 object-contain"
            />
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getBadgeStyle(tech.badge)}`}>
            {tech.badge}
            </span>
        </div>

        {/* Name + Description */}
        <div>
            <h3 className="font-bold text-gray-800 text-lg">{tech.name}</h3>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
            {tech.description}
            </p>
        </div>

        {/* Category + Difficulty + Rating */}
        <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
            {tech.category}
            </span>
            <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
            {tech.difficulty}
            </span>
            <span className="text-xs flex items-center gap-1 ml-auto text-gray-700 font-semibold">
            ⭐ {tech.rating}
            </span>
        </div>

        {/* Add to Stack Button */}
        <button
            onClick={() => onAdd(tech)}
            disabled={isAdded}
            className={`mt-auto w-full py-2 rounded-xl text-sm font-semibold transition-all ${
            isAdded
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
        >
            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
        </div>
    )
}