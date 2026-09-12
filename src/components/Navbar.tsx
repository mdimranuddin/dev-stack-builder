import { useState } from 'react'
import { X } from 'lucide-react'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">

      {/* ===== DESKTOP NAVBAR ===== */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 py-3 items-center justify-between">
        {/* Left: Logo */}
        {/* Left: Logo */}
        <div className="flex items-center">
        <img src={`${import.meta.env.BASE_URL}logo-text.png`} alt="Dev Stack" className="h-8 object-contain" />
        </div>

        {/* Center: Nav Links */}
        <ul className="flex items-center gap-6">
            {navLinks.map((link, index) => (
            <li key={link.name}>
                <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                    index === 0 ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'
                }`}
                >
                {link.name}
                </a>
            </li>
            ))}
        </ul>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
            <button className="text-sm text-gray-700 hover:text-pink-500 font-medium transition-colors">
            Sign In
            </button>
            <button className="text-sm text-white px-5 py-2 rounded-full brand-gradient-bg font-medium hover:opacity-90 transition-opacity">
            Sign Up
            </button>
        </div>
        </div>

      {/* ===== MOBILE NAVBAR ===== */}
        <div className="md:hidden px-4 py-3">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between">

          {/* Left: Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
                ? <X size={22} className="text-gray-700" />
                : <img src={`${import.meta.env.BASE_URL}hamburger.png`} alt="menu" className="w-5 h-5" />
            }
            </button>

          {/* Center: Logo — always centered */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <img src={`${import.meta.env.BASE_URL}logo-text.png`} alt="Dev Stack Logo" className="h-7 object-contain" />
            </div>

          {/* Right: Sign In + Sign Up */}
            <div className="flex items-center gap-2">
                <button className="text-xs text-gray-700 font-medium">
                Sign In
            </button>
            <button className="text-xs text-white px-3 py-1.5 rounded-full brand-gradient-bg font-medium">
                Sign Up
            </button>
            </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            <div className="mt-3 flex flex-col gap-3 border-t border-gray-100 pt-3">
            {navLinks.map(link => (
                <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 hover:text-pink-500 font-medium"
                onClick={() => setMenuOpen(false)}
                >
                {link.name}
                </a>
            ))}
            </div>
        )}
        </div>

    </nav>
    )
}// Navbar component
