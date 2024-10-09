import { GlobeIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

export const Contact = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className="flex flex-col items-center w-80 lg:w-96 h-96 bg-[#262626] shadow-portfolio my-24 mx-auto text-white py-12 px-12 text-center">
      <div>
        <span className="text-xl">{t('Fale comigo')}</span>
        <h1 className="font-black italic uppercase text-4xl">{t('Contato')}</h1>
      </div>
      <div className="flex flex-row items-center self-start italic text-base mt-12 gap-4">
        <LinkedinIcon size={30}/>
        <span>linkedin/user-name</span>
      </div>
      <div className="flex flex-row items-center self-start italic text-base my-8 gap-4">
        <MailIcon size={30}/>
        <span>email@email.com</span>
      </div>
      <div className="flex flex-row items-center self-start italic text-base gap-4">
        <GlobeIcon size={30}/>
        <span>gbrangel.com</span>
      </div>
    </section>
  )
})