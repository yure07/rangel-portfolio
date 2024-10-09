import { useTranslation } from "react-i18next"

interface CardProject{
  srcImg: string
  title: string
  description: string
  link: string
}

export const CardProject = (projectProp: CardProject) => {
  const { t } = useTranslation()
  return(
    <div className="flex flex-col lg:flex-row gap-6 my-8 mx-auto items-center text-center">
      <div className="w-52 h-52 lg:w-44 lg:h-44 bg-[#1E1E1E] shadow-portfolio"/>
      <div className="flex flex-col gap-2 lg:text-start">
        <h3 className="uppercase text-xl font-black">{projectProp.title}</h3>
        <p className="text-justify text-xs w-52 lg:w-64 px-2 lg:p-0">{projectProp.description}</p>
      <a 
        href={projectProp.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center w-28 h-8 bg-white text-black text-xs font-bold">
          {t('Ver projeto')}
      </a>
      </div>
    </div>
  )
}