import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<>
			<Header />
			<main
				style={{
					backgroundImage: "url('/nout.avif')",
          backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
          width: '100%',
          height: '100vh'
				}}
			>
				<div className='px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto pt-[80px] pb-[40px] min-h-[calc(100vh-110px)] max-[768px]:min-h-[calc(100vh-140px)]'>
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
