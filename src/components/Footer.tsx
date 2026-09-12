export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Block */}
            <div>
            <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-bold text-sm">
                DS
                </div>
                <span className="font-bold text-gray-800 text-lg">Dev Stack</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                A place to explore dev tools, compare your options, and
                build a stack that actually makes sense for your project.
            </p>
            <div className="flex gap-4">
                {['GitHub', 'Twitter', 'LinkedIn'].map(s => (
                    <a
                    key={s}
                    href="#"
                    className="text-sm text-gray-500 hover:text-pink-500 transition-colors font-medium"
                >
                    {s}
                </a>
                ))}
            </div>
            </div>

            {/* Link Groups */}
            {[
            { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
            { title: 'Company', links: ['About', 'Contact', 'Careers'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
            ].map(group => (
            <div key={group.title}>
                <h3 className="font-bold text-gray-800 mb-3 uppercase text-xs tracking-wider">
                {group.title}
                </h3>
                <ul className="flex flex-col gap-2">
                {group.links.map(link => (
                    <li key={link}>
                        <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-pink-500 transition-colors"
                    >
                        {link}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 px-4 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
            </p>
            <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-400 hover:text-pink-500">
                Privacy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-pink-500">
                Terms
            </a>
            </div>
        </div>
        </footer>
    )
}// Footer component
// Footer component
