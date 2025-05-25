import { useState } from 'react'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [modal, setModal] = useState(false)
  const location = useLocation()
  const current = location.pathname

  return (
    <>
      <header className='fixed top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md border-b border-white/10'>
        <div className='max-w-[90%] mx-auto px-4 py-3 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-full dark:bg-emerald-400 flex items-center justify-center font-bold text-white text-lg shadow-md'>
              OA
            </div>
            <h1 className='text-white font-bold text-lg'>Odilov Aslanbek</h1>
          </Link>

          <nav className='hidden md:flex gap-10'>
            <HeaderLink to='/about' current={current}>
              About me
            </HeaderLink>
            <HeaderLink to='/portfolio' current={current}>
              Portfolio
            </HeaderLink>
            <HeaderLink to='/contact' current={current}>
              Contact me
            </HeaderLink>
          </nav>

          <FaBarsStaggered
            onClick={() => setModal(true)}
            className='text-white text-2xl md:hidden'
          />
        </div>
      </header>

      {modal && (
        <div
          onClick={() => setModal(false)}
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
        />
      )}

      <div
        style={{ backgroundColor: 'rgba(30, 30, 30, 0.95)' }}
        className={`fixed top-0 right-0 h-full w-[280px] text-white flex flex-col gap-6 pt-16 px-6 transition-transform duration-300 z-50 md:hidden ${
          modal ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <FaXmark
          onClick={() => setModal(false)}
          className='absolute top-4 left-4 text-3xl cursor-pointer'
        />
        <Link
          to='/about'
          onClick={() => setModal(false)}
          className={`text-lg font-medium ${
            current === '/about' ? 'text-emerald-400' : ''
          }`}
        >
          About me
        </Link>
        <Link
          to='/portfolio'
          onClick={() => setModal(false)}
          className={`text-lg font-medium ${
            current === '/portfolio' ? 'text-emerald-400' : ''
          }`}
        >
          Portfolio
        </Link>
        <Link
          to='/contact'
          onClick={() => setModal(false)}
          className={`text-lg font-medium ${
            current === '/contact' ? 'text-emerald-400' : ''
          }`}
        >
          Contact me
        </Link>
      </div>
    </>
  )
}

function HeaderLink({ to, children, current }) {
  const isActive = current === to

  return (
    <Link
      to={to}
      className='group text-gray-300 font-medium relative'
    >
      <span className={isActive ? 'text-white' : ''}>{children}</span>
      <span
        className={`absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full group-focus-visible:w-full'
        }`}
      ></span>
    </Link>
  )
}

export default Header
