import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { CardProject } from "./components/CardProject"

// images power bi projects
import imgpowerbi1 from '../../assets/power-bi1.png'
import imgpowerbi2 from '../../assets/power-bi2.png'
import imgpowerbi3 from '../../assets/power-bi3.png'
import imgpowerbi4 from '../../assets/power-bi4.png'
import imgpowerbi5 from '../../assets/power-bi5.png'
import imgpowerbi6 from '../../assets/power-bi6.png'
import imgpowerbi7 from '../../assets/power-bi7.png'
import imgpowerbi8 from '../../assets/power-bi8.png'
import imgpowerbi9 from '../../assets/power-bi9.png'
import imgpowerbi10 from '../../assets/power-bi10.png'

interface projectsDataType{
  id: number
  img: string
  title: string
  description: string
  link: string
}

const projectsBIData:projectsDataType[] = [
  {
    id: 1,
    img: imgpowerbi1,
    title: 'painel de vendas e marketing',
    description: 'Visão Geral da Performance: Métricas essenciais como receita, custo, lucro, média de conversão e engajamento, acompanhando o crescimento dos KPIs em relação ao ano anterior. Análise Avançada de Leads e Canais de Vendas.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiNzhjM2VkYWItMTUwZi00MWQ5LWJkZjItNzYyMjgyOGNlNThhIiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9'
  },
  {
    id: 2,
    img: imgpowerbi2,
    title: 'acompanhamento de atendimentos',
    description: 'Monitoramento do tempo médio de operação, permitindo acompanhar desde a saída da ambulância até a chegada ao hospital. Visualizar protocolos mais utilizados e desempenho geral da equipe.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiMDRlYjhmYmQtOWRmYi00ZmI4LWI4NzQtZjI3ZWI0YzEyZGI1IiwidCI6ImZiMjNhNmMwLTY1ZTItNGQxYi1hZDY2LWE4ZWQ1MzMzZjlkZCJ9'
  },
  {
    id: 3,
    img: imgpowerbi3,
    title: 'gestão de lojas',
    description: 'Faturamento e Lucro Total e mensal, com comparativos anuais e semanais. Produtos mais vendidos, margem de lucro, faturamento e lucro por categoria. Faturamento, margem de lucro e tempo médio de entrega por filial.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiYjM4YjlkNWMtNGQ3NC00ZjhjLWJlZGQtNzMyOTUzZDYxZTcyIiwidCI6ImZiMjNhNmMwLTY1ZTItNGQxYi1hZDY2LWE4ZWQ1MzMzZjlkZCJ9'
  },
  {
    id: 4,
    img: imgpowerbi4,
    title: 'acompanhamento de projetos',
    description: 'Monitoramento do orçamento, custo real e um KPI de consumo mostrando o percentual do orçamento usado. Demonstra o acumulado dos custos ao longo do tempo, visualiza os valores gastos com cada fornecedor.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiMzAwNGUxNmItY2NjMS00M2Q1LTg2M2YtM2Q4MjJkMTIwNGQyIiwidCI6ImZiMjNhNmMwLTY1ZTItNGQxYi1hZDY2LWE4ZWQ1MzMzZjlkZCJ9'
  },
  {
    id: 5,
    img: imgpowerbi5,
    title: 'acompanhamento de compras',
    description: 'Valor total de compras e total de pedidos para monitoramento dos gastos e volumes globais. Compras dentro e fora do prazo, e compras canceladas. OTIF (On-Time In-Full), um indicador para acompanhar a eficiência da cadeia de suprimentos.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiOWEzZjc3ZWYtN2ZhZC00MjhiLTllNjUtYzJjOTE1NmUzOGYwIiwidCI6ImZiMjNhNmMwLTY1ZTItNGQxYi1hZDY2LWE4ZWQ1MzMzZjlkZCJ9'
  },
  {
    id: 6,
    img: imgpowerbi6,
    title: 'acompanhamento de acidentes em rodovias federais',
    description: 'Acompanhamento de Acidentes: Dados sobre eventos, vítimas e óbitos em rodovias federais, destacando estados mais afetados, horários e causas principais.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiN2M4MTBiZWEtMmRiZi00ZWExLTgwM2YtOGJlNzY0ZjI0ZDhlIiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9'
  },
  {
    id: 7,
    img: imgpowerbi7,
    title: 'acompanhamento de vendas',
    description: 'O dashboard acompanha o faturamento real e a meta, destacando a diferença percentual por filial. Inclui gráficos comparativos por mês, análise do desvio da meta e filtros para visualização por ano e filial.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiZGM1OTFiZmYtZTAwZC00MmFlLTkwYzAtYjZiOWQ1NDI4M2YyIiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9'
  },
  {
    id: 8,
    img: imgpowerbi8,
    title: 'relatório pesquisa de satisfação dos colaboradores',
    description: 'Visão Geral da Satisfação: Métricas como perguntas respondidas, cargos, funcionários e fontes de recrutamento, além da evolução dos KPIs de satisfação e demografia.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiOTEzYmU4YTAtNjAyYi00MjA4LTk2OWMtMmNmYWZkYTE1NDJjIiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9'
  },
  {
    id: 9,
    img: imgpowerbi9,
    title: 'acompanhamento de performance NBA',
    description: 'Performance NBA: Dados de pontos, acertos e estatísticas detalhadas, com visão por times e jogadores, destacando métricas como PPJ, turnovers e roubos de bola.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiMWM0YWEwOGMtMDBkMC00YjUxLWFhMDEtZGVkNzFlY2M1NjY5IiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9'
  },
  {
    id: 10,
    img: imgpowerbi10,
    title: 'acompanhamento financeiro',
    description: 'Acompanhamento Financeiro: Métricas essenciais como Receita, Custos, Lucro Bruto, EBITDA e Lucro Líquido, analisando a evolução financeira por ano, país e categoria.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiNTA2MGI4MTEtZmFkNC00NGNlLTg1NDYtM2YyMTBiZGE2ZWQ0IiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9'
  }

]

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation()
  return(
    <section ref={ref} className="flex flex-col p-12 lg:px-24">
      <div className="flex flex-col text-white self-center text-center">
        <span className="text-base">{t('projetos mais recentes')}</span>
        <h1 className="font-black italic text-5xl uppercase">{t('Projetos')}</h1>
      </div>
      <h2 className="font-black italic text-3xl uppercase text-white mt-16">power bi</h2>
      <div className="flex flex-row flex-wrap justify-center lg:justify-between text-white">
        {projectsBIData.map((project) => (
          <CardProject
            key={project.id}
            srcImg={project.img}
            title={t(`${project.title}`)}
            description={t(`${project.description}`)}
            link={project.link}
          />
        ))}
      </div>
      <div className="w-full h-[1px] bg-white my-12"/>
      <h2 className="font-black italic text-3xl uppercase text-white">Python</h2>
      <div className="flex flex-col text-white items-center justify-center self-center gap-6 mt-8">
        <h1 className="text-3xl uppercase font-black">{t('em breve')}</h1>
        <div className='flex flex-row'>
          <div className='w-32 h-2 bg-black'/>
          <div className='w-40 h-2 bg-white'/>
        </div>
        <div className='flex w-72 -mt-5'>
          <span className='text-[10px]'>{t('Carregando')}...</span>
          <span className='text-[10px] ml-auto'>45%</span>
        </div>
      </div>
    </section>
  )
})