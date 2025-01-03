import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { CardProject } from "./components/CardProject"

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className="flex flex-col p-12 lg:px-24">
      <div className="flex flex-col text-white self-center text-center">
        <span className="text-base">{t('5 projetos mais recentes')}</span>
        <h1 className="font-black italic text-5xl uppercase">{t('Projetos')}</h1>
      </div>
      <h2 className="font-black italic text-3xl uppercase text-white mt-16">power bi</h2>
      <div className="flex flex-row flex-wrap text-white justify-between">
        <CardProject 
          srcImg=""
          title="title project" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus quam sed ultrices blandit. Duis elit metus, ornare sed 
            luctus id, tempus nec lectus. In suscipit mi dui, ut iaculis orci lacinia non. 
            Nulla dapibus mollis turpis a bibendum." 
          link="" 
        />
        <CardProject 
          srcImg=""
          title="title project" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus quam sed ultrices blandit. Duis elit metus, ornare sed 
            luctus id, tempus nec lectus. In suscipit mi dui, ut iaculis orci lacinia non. 
            Nulla dapibus mollis turpis a bibendum." 
          link="" 
        />
        <CardProject 
          srcImg=""
          title="title project" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus quam sed ultrices blandit. Duis elit metus, ornare sed 
            luctus id, tempus nec lectus. In suscipit mi dui, ut iaculis orci lacinia non. 
            Nulla dapibus mollis turpis a bibendum." 
          link="" 
        />
      </div>
      <div className="w-full h-[1px] bg-white my-12"/>
      <h2 className="font-black italic text-3xl uppercase text-white">Python</h2>
      <div className="flex flex-row flex-wrap text-white justify-between">
        <CardProject 
          srcImg=""
          title="title project" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus quam sed ultrices blandit. Duis elit metus, ornare sed 
            luctus id, tempus nec lectus. In suscipit mi dui, ut iaculis orci lacinia non. 
            Nulla dapibus mollis turpis a bibendum." 
          link="" 
        />
        <CardProject 
          srcImg=""
          title="title project" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus quam sed ultrices blandit. Duis elit metus, ornare sed 
            luctus id, tempus nec lectus. In suscipit mi dui, ut iaculis orci lacinia non. 
            Nulla dapibus mollis turpis a bibendum." 
          link="" 
        />
      </div>
    </section>
  )
})