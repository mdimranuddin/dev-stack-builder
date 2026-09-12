export default function Hero() {
    return (
        <section id="home" className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
            </p>
            <div className="flex gap-4 flex-wrap">
            <a href="#technologies">
                <button className="px-6 py-3 rounded-full text-white brand-gradient-bg font-semibold hover:opacity-90 transition-opacity">
                Explore Technologies
                </button>
            </a>
            <button className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-pink-400 hover:text-pink-500 transition-colors">
                Learn More
            </button>
            </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center">
        <img
        src={`${import.meta.env.BASE_URL}banner-stack.png`}
        alt="Dev Stack Hero"
        className="w-125 h-125 object-contain drop-shadow-2xl"
        />
        </div>
        </section>
    )
}// Hero component
