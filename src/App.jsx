import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import CLOUDS2 from 'vanta/dist/vanta.clouds2.min' // clouds2 effektini import qildik
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS2({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // qo'shimcha rang va parametrlari kerak bo'lsa qo'shing
          // color: 0xff9900,
          // backgroundColor: 0x000000,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="relative w-full h-screen">
      <div
        ref={vantaRef}
        className="fixed inset-0 w-full h-full -z-10"
      />
      <div className="relative z-10 text-white h-full overflow-auto">
        <Header />
        <main className="px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto pt-[80px] pb-[40px] min-h-[calc(100vh-100px)] max-[768px]:min-h-[calc(100vh-140px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
