import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechGrid from './components/TechGrid'
import Footer from './components/Footer'

function App() {
    return (
    <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <TechGrid />
        <Footer />
        <ToastContainer />
    </div>
    )
}

export default App