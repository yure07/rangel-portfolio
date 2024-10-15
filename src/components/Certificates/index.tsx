import { forwardRef } from "react"
import { useTranslation } from "react-i18next"
import { CardCertificate } from "./components/CardCertificate"

export const Certificates = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation()

  return(
    <section ref={ref} className="flex flex-col p-12 lg:px-24">
      <div className="flex flex-col text-white self-center text-center">
        <span className="text-base">{t('Meus certificados')}</span>
        <h1 className="font-black italic text-5xl uppercase">{t('Certificados')}</h1>
      </div>
      <div className="flex flex-row flex-wrap text-white justify-between mt-16">
        <CardCertificate
          srcImg=""
          title="title certificate" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus quam sed ultrices blandit. Duis elit metus, ornare sed 
            luctus id, tempus nec lectus. In suscipit mi dui, ut iaculis orci lacinia non. 
            Nulla dapibus mollis turpis a bibendum."
        />
        <CardCertificate
          srcImg=""
          title="title certificate" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus quam sed ultrices blandit. Duis elit metus, ornare sed 
            luctus id, tempus nec lectus. In suscipit mi dui, ut iaculis orci lacinia non. 
            Nulla dapibus mollis turpis a bibendum."
        />
        <CardCertificate
          srcImg=""
          title="title certificate" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc maximus quam sed ultrices blandit. Duis elit metus, ornare sed 
            luctus id, tempus nec lectus. In suscipit mi dui, ut iaculis orci lacinia non. 
            Nulla dapibus mollis turpis a bibendum."
        />
      </div>
    </section>
  )
})