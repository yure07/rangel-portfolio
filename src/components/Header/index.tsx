import { MenuIcon } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return(
    <header className="w-full flex flex-row items-center justify-between py-8 px-12 lg:px-24 text-white">
      <div className="flex flex-col font-black italic uppercase text-xl">
        <h1>gabriel</h1>
        <h1 className="-mt-2 ml-4">rangel</h1>
      </div>
      <MenuIcon size={24} className='ml-auto lg:hidden' onClick={() => handleToggleMenu()}/>

      <nav className='hidden lg:flex'>
        <ul className='flex flex-row gap-16 text-xl'>
          <li className='cursor-pointer'>Início</li>
          <li className='cursor-pointer'>Sobre mim</li>
          <li className='cursor-pointer'>Projetos</li>
          <li className='cursor-pointer'>Contato</li>
        </ul>
      </nav>

      <div className='hidden lg:flex flex-row items-center gap-3 uppercase'>
        <span className='cursor-pointer'>EN</span>
        <div className='w-[6px] h-[6px] bg-white rounded-full'/>
        <span className='font-bold cursor-pointer'>PT</span>
      </div>  

      {toggleMenu && (
        <div className='absolute flex flex-col bg-transparent w-40 h-60 shadow-portfolio mt-80 ml-48 text-xl py-7 px-5 gap-3'>
          <span>Início</span>
          <span>Sobre mim</span>
          <span>Projetos</span>
          <span>Contato</span>
          <div className='flex flex-row items-center gap-3 uppercase'>
            <span>EN</span>
            <div className='w-[6px] h-[6px] bg-white rounded-full'/>
            <span className='font-bold'>PT</span>
          </div>  
        </div>
      )}
    </header>
  )
}