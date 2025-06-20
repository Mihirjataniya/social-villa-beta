// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'


const PrimaryLayout = () => {
    return (
        <div  className="min-h-screen font-primary flex flex-col bg-black over">
            {/* <Navbar /> */}
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollProgress />
            {/* <Footer /> */}
        </div>
    )
}

export default PrimaryLayout
