import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			
			<main
				style={{
					backgroundImage: "url('/yulduz.jpg')",
					backgroundPosition: 'center',
				}}
				className="flex-1"
			>
				<div className="px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto pt-[100px] pb-[40px]">
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</div>
			</main>
			
			<Footer />
		</div>
	);
}

export default App;
