import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import imgProfile from '../../assets/profile-img.png'

export const Home = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className="flex flex-col-reverse mt-16 h-[620px] lg:flex-row items-center gap-7 text-white px-12 lg:px-24" >
      <div className="flex flex-col">
        <span className="text-base lg:text-2xl italic">{t('Olá, sou o')}</span>
        <h1 className="text-6xl lg:text-8xl italic uppercase font-black">gabriel</h1>
        <h1 className="text-6xl lg:text-8xl italic uppercase font-black ml-12 -mt-2">rangel</h1>
        <span className="text-base lg:text-2xl italic ml-auto">{t('Analista de dados')}</span>
      </div>
      <div className="flex items-center justify-center w-72 h-72 rounded-full shadow-portfolio lg:ml-auto">
        <img src={imgProfile} alt="img-profile" className='w-60 -mt-7 rounded-b-full'/>
      </div>
    </section>
  )
})