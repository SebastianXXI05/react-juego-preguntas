import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import menu from './assets/list.svg'

function App() {
  const [activate, setActivate] = useState(false) 

  const handleMenu =() => {
    setActivate(!activate)
  }

  return (
    <div className='font-mono relative overflow-x-hidden h-screen'>
      <header className='bg-teal-800 mb-8'>
        <div className='w-11/12 max-w-7xl mx-auto text-white h-20 flex items-center justify-between'>
          <h2 className='font-bold text-2xl'>PREGUNTAS</h2>
          <nav>
            <ul className={`flex flex-col absolute ${activate ? 'left-0' : 'left-full'} top-20 bg-teal-800 h-full w-full items-center pt-5 ease-in duration-200 md:static md:flex-row bg-none`}>
              <li className='mb-6 text-xl'>
                <Link onClick={() => handleMenu()} className='py-2 px-4 hover:bg-teal-700' to='/'>Inicio</Link>
              </li>
              <li className='mb-6 text-xl'>
                <Link onClick={() => handleMenu()} className='py-2 px-4 hover:bg-teal-700' to='addQuestion'>Añadir</Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => handleMenu()}
            className='md:hidden'
          >
            <img src={menu} alt="imagen menu" className='w-10 invert' />
          </button>
        </div>
      </header>
      <div className='w-11/12 max-w-7xl mx-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
