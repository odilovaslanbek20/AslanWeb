import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import VantaClouds from './Vanta'

function App() {
  return (
      <div className="relative z-10 text-white h-full overflow-auto">
        <Header />
        <main className="px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto pt-[80px] pb-[40px] min-h-[calc(100vh-110px)] max-[768px]:min-h-[calc(100vh-140px)]">
          <VantaClouds/>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App
