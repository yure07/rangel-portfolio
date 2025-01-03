import { MenuIcon } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  sectionsRefs: {
    homeRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    certificatesRef: React.RefObject<HTMLElement>
  };
}

export const Header = ({ sectionsRefs }: HeaderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('pt')
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const headerRef = useRef<HTMLElement>(null)
  const { t, i18n: { changeLanguage } } = useTranslation()

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleChangeLanguage = (newLanguage: 'pt' | 'en') => {
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
    setToggleMenu(false)
  }

  const handleChangeScroll = (sectionRef: React.RefObject<HTMLElement>, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setToggleMenu(false)
    if (sectionRef.current && headerRef.current) {
      const sectionPosition = sectionRef.current.offsetTop
      const offsetPosition = sectionPosition - headerRef.current.offsetHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  };

  return(
    <header ref={headerRef} className="fixed left-0 z-10 w-full flex flex-row items-center justify-between py-8 px-12 lg:px-24 xl:px-52 text-white shadow-portfolio bg-[#1E1E1E]">
      <div className="flex flex-col font-black italic uppercase text-xl">
        <h1>gabriel</h1>
        <h1 className="-mt-2 ml-4">rangel</h1>
      </div>
      <MenuIcon size={24} className='ml-auto lg:hidden' onClick={() => handleToggleMenu()}/>

      <nav className='hidden lg:flex'>
        <ul className='flex flex-row gap-16 text-xl'>
          <li className='cursor-pointer'>
            <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.homeRef, e)}>
              {t('Início')}
            </button>
          </li>
          <li className='cursor-pointer'>
            <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.aboutRef, e)}>
              {t('Sobre mim')}
            </button>
          </li>
          <li className='cursor-pointer'>
            <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.projectsRef, e)}>
              {t('Projetos')}
            </button>
          </li>
          <li className='cursor-pointer'>
            <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.contactRef, e)}>
              {t('Contato')}
            </button>
          </li>
        </ul>
      </nav>

      <div className='hidden lg:flex flex-row items-center gap-3 uppercase'>
        <button 
          type='button' 
          className={`cursor-pointer ${currentLanguage === 'en' && 'font-bold'}`} 
          onClick={() => handleChangeLanguage('en')}>
            EN
        </button>
        <div className='w-[6px] h-[6px] bg-white rounded-full'/>
        <button 
          type='button' 
          className={`cursor-pointer ${currentLanguage === 'pt' && 'font-bold'}`}
          onClick={() => handleChangeLanguage('pt')}>
            PT
        </button>
      </div>  

      {toggleMenu && (
        <div className='absolute flex flex-col w-40 h-60 shadow-portfolio text-xl py-7 px-5 gap-3 right-6 top-20 lg:hidden bg-[#1E1E1E]'>
          <ul className='space-y-2'>
            <li className='cursor-pointer'>
              <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.homeRef, e)}>
                {t('Início')}
              </button>
            </li>
            <li className='cursor-pointer'>
              <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.aboutRef, e)}>
                {t('Sobre mim')}
              </button>
            </li>
            <li className='cursor-pointer'>
              <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.projectsRef, e)}>
                {t('Projetos')}
              </button>
            </li>
            <li className='cursor-pointer'>
              <button type='button' onClick={(e) => handleChangeScroll(sectionsRefs.contactRef, e)}>
                {t('Contato')}
              </button>
            </li>
          </ul>
          <div className='flex flex-row items-center gap-3 uppercase'>
            <button 
              type='button' 
              className={`cursor-pointer ${currentLanguage === 'en' && 'font-bold'}`} 
              onClick={() => handleChangeLanguage('en')}>
                EN
            </button>
            <div className='w-[6px] h-[6px] bg-white rounded-full'/>
            <button 
              type='button' 
              className={`cursor-pointer ${currentLanguage === 'pt' && 'font-bold'}`}
              onClick={() => handleChangeLanguage('pt')}>
                PT
            </button>
          </div>  
        </div>
      )}
    </header>
  )
}