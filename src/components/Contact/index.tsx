import { GlobeIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

export const Contact = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className="flex flex-col items-center w-80 lg:w-96 h-96 bg-[#262626] shadow-portfolio my-24 mx-auto text-white py-12 px-6 text-center">
      <div>
        <span className="text-xl">{t('Fale comigo')}</span>
        <h1 className="font-black italic uppercase text-4xl">{t('Contato')}</h1>
      </div>
      <div className="flex flex-row items-center self-start italic text-xs lg:text-base mt-12 gap-4 underline">
        <LinkedinIcon size={30}/>
        <a href='https://www.linkedin.com/in/gabriel-r-lima-a954ba26a/' target='_blank' rel="noreferrer">linkedin/gabriel-rangel</a>
      </div>
      <div className="flex flex-row items-center self-start italic text-xs lg:text-base my-8 gap-4 underline">
        <MailIcon size={30}/>
        <a href='mailto:gabrielrangel.analytics@gmail.com'>gabrielrangel.analytics@gmail.com</a>
      </div>
      <div className="flex flex-row items-center self-start italic text-xs lg:text-base gap-4 underline">
        <GlobeIcon size={30}/>
        <a href='https://gabriel-rangel.netlify.app/' target='_blank' rel="noreferrer">gbrangel.com</a>
      </div>
    </section>
  )
})