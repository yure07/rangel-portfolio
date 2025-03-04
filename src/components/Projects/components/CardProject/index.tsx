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
    <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 my-8 items-center text-center">
      <div className="flex w-52 h-52 items-center">
        <img src={projectProp.srcImg} alt="img-project"/>
      </div>
      <div className="flex flex-col gap-2 -mt-2 lg:mt-0 text-start">
        <h3 className="uppercase font-black w-52">{projectProp.title}</h3>
        <p className="text-justify text-xs w-52 lg:w-64">{projectProp.description}</p>
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