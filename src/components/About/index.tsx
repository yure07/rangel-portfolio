import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

export const About = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className='flex h-[700px] items-center'>
      <div className="absolute left-0 flex flex-col w-full lg:justify-center bg-[#262626] p-12 lg:px-56 text-white gap-5">
        <span className="font-bold text-base lg:text-2xl">{t('Mais sobre mim')}</span>
        <article className="text-xs lg:text-xl text-justify space-y-5">
          <p>
            {t('Com mais de 1 ano de experiência na área de dados, sou apaixonado por transformar informações em decisões estratégicas. Em um dos projetos que lidero, desenvolvi um painel no Power BI que permitiu a um cliente reduzir os custos operacionais em 20% e duplicar o faturamento mensal. Esse resultado demonstra meu comprometimento em criar soluções baseadas em dados que geram impacto direto e positivo nos negócios.')}
          </p>
          <p>
            {t('Atualmente, na MRO, trabalho diariamente com Power BI, sendo responsável pela gestão e desenvolvimento de painéis que apoiam a tomada de decisão. Minha atuação envolve desde a concepção de relatórios personalizados até a integração de diferentes fontes de dados, garantindo informações precisas e acessíveis. Além disso, contribuo para a otimização de processos corporativos, implementando melhorias por meio da análise de dados, automação e integração de sistemas.')}
          </p>
          <p>
            {t('Minha experiência prática e técnica também me permite compartilhar conhecimento com colegas, ajudando a construir uma cultura orientada a dados. Meu objetivo é sempre transformar desafios em oportunidades, utilizando dados como ferramenta principal para alcançar resultados mensuráveis e consistentes.')}
          </p>
        </article>
      </div>
    </section>
  )
})