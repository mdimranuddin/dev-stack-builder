import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import type { Technology } from '../types/technology'
import TechCard from './TechCard'
import YourStack from './YourStack'

export default function TechGrid() {
    const [technologies, setTechnologies] = useState<Technology[]>([])
    const [stack, setStack] = useState<Technology[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}technologies.json`)
        .then(res => res.json())
        .then((data: Technology[]) => {
            setTechnologies(data)
            setLoading(false)
        })
        .catch(() => setLoading(false))
    }, [])

    const handleAdd = (tech: Technology) => {
        if (stack.find(t => t.id === tech.id)) {
        toast.warning(`${tech.name} is already in your stack!`, {
            position: 'top-center'
        })
        return
        }
        setStack(prev => [...prev, tech])
        toast.success(`${tech.name} added to your stack!`, {
        position: 'top-center'
        })
    }

    const handleRemove = (id: string) => {
        const tech = stack.find(t => t.id === id)
        setStack(prev => prev.filter(t => t.id !== id))
        toast.info(`${tech?.name} removed from stack.`, {
        position: 'top-center'
        })
    }

    const handleRemoveAll = () => {
        setStack([])
        toast.error('All technologies removed!', {
        position: 'top-center'
        })
    }

    return (
        <section id="technologies" className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900">
            Explore the{' '}
            <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="text-gray-500 mt-2">
            Pick one technology per category to build your ideal stack.
            </p>
        </div>

        {/* Loading Spinner */}
        {loading ? (
            <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-4 text-gray-500 font-medium">
                Loading technologies...
            </span>
            </div>
        ) : (
            <div className="flex flex-col lg:flex-row gap-8">
            {/* Cards Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map(tech => (
                <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={handleAdd}
                    isAdded={!!stack.find(t => t.id === tech.id)}
                />
                ))}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-72">
                <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
                />
            </div>
            </div>
        )}
        </section>
    )
}// TechGrid component
