import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AboutPage from './pages/About/About'
import ContactPage from './pages/Contact/Contact'
import PortfolioPage from './pages/portfolio/Portfolio'
import Portfolio from './components/Portfolio/PortfolioFile'

function App() {
	return (
		<div className="flex flex-col h-screen">
			<Header />

			<main
				className="flex-1 overflow-y-auto"
				style={{
					backgroundImage: "url('/nout.jpg')",
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto pt-[80px] pb-[40px] min-h-full'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/portfolio' element={<Portfolio/>} />
						<Route path='/contact' element={<ContactPage />} />
					</Routes>
				</div>
			</main>

			<Footer />
		</div>
	)
}

export default App
