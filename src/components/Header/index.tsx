import { MenuIcon } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useState } from 'react';

interface HeaderProps {
  sectionsRefs: {
    homeRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
  };
}

export const Header = ({ sectionsRefs }: HeaderProps) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleChangeScroll = (sectionRef: React.RefObject<HTMLElement>, e: MouseEvent<HTMLButtonElement>, nameSection?: string) => {
    e.preventDefault()
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: nameSection === 'Projetos' ? 'start' : 'center',
      });
    }
  };

  return(
    <header className="w-full flex flex-row items-center justify-between py-8 px-12 lg:px-24 text-white">
      <div className="flex flex-col font-black italic uppercase text-xl">
        <h1>gabriel</h1>
        <h1 className="-mt-2 ml-4">rangel</h1>
      </div>
      <MenuIcon size={24} className='ml-auto lg:hidden' onClick={() => handleToggleMenu()}/>

      <nav className='hidden lg:flex'>
        <ul className='flex flex-row gap-16 text-xl'>
          <li className='cursor-pointer'>
            <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.homeRef, e)}>
              Início
            </button>
          </li>
          <li className='cursor-pointer'>
            <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.aboutRef, e)}>
              Sobre mim
            </button>
          </li>
          <li className='cursor-pointer'>
            <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.projectsRef, e)}>
              Projetos
            </button>
          </li>
          <li className='cursor-pointer'>
            <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.contactRef, e)}>
              Contato
            </button>
          </li>
        </ul>
      </nav>

      <div className='hidden lg:flex flex-row items-center gap-3 uppercase'>
        <span className='cursor-pointer'>EN</span>
        <div className='w-[6px] h-[6px] bg-white rounded-full'/>
        <span className='font-bold cursor-pointer'>PT</span>
      </div>  

      {toggleMenu && (
        <div className='absolute flex flex-col bg-transparent w-40 h-60 shadow-portfolio text-xl py-7 px-5 gap-3 right-6 top-20 lg:hidden'>
          <ul className='space-y-2'>
            <li className='cursor-pointer'>
              <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.homeRef, e)}>
                Início
              </button>
            </li>
            <li className='cursor-pointer'>
              <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.aboutRef, e)}>
                Sobre mim
              </button>
            </li>
            <li className='cursor-pointer'>
              <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.projectsRef, e)}>
                Projetos
              </button>
            </li>
            <li className='cursor-pointer'>
              <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.contactRef, e)}>
                Contato
              </button>
            </li>
          </ul>
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