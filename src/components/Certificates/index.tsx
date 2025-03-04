import { forwardRef } from "react"
import { useTranslation } from "react-i18next"
import { CardCertificate } from "./components/CardCertificate"

// images certificates
import imgCertificate1 from '../../assets/certificado1.png'
import imgCertificate2 from '../../assets/certificado2.png'
import imgCertificate3 from '../../assets/certificado3.png'
import imgCertificate4 from '../../assets/certificado4.png'
import imgCertificate5 from '../../assets/certificado5.png'
import imgCertificate6 from '../../assets/certificado6.png'
import imgCertificate7 from '../../assets/certificado7.png'
import imgCertificate8 from '../../assets/certificado8.png'
import imgCertificate9 from '../../assets/certificado9.png'
import imgCertificate10 from '../../assets/certificado10.png'

interface certificatesDataType{
  id: number
  img: string
  title: string
  description: string
}

const certificatesData: certificatesDataType[] = [
  {
    id: 1,
    img: imgCertificate1,
    title: 'Criando Aplicativos Web com Streamlit',
    description: 'Este curso ensina a criar e personalizar aplicativos interativos de visualização de dados com Streamlit, abordando desde os conceitos básicos até o deploy na nuvem. Você aprenderá a estruturar um app, customizar a interface, explorar dados da FIFA e publicar seu projeto no Streamlit Cloud. Ideal para quem deseja transformar análises em dashboards dinâmicos de forma rápida e intuitiva.'
  },
  {
    id: 2,
    img: imgCertificate2,
    title: 'Analisando Dados com Pandas & SQL',
    description: 'Este curso oferece uma introdução prática ao Pandas, abordando desde conceitos básicos até o uso avançado com SQL. Você aprenderá a filtrar, agrupar e combinar tabelas, além de realizar análises reais, como preços da gasolina no Brasil, obesidade mundial e PIB per capita. O curso finaliza com um desafio prático, consolidando os conhecimentos adquiridos.'
  },
  {
    id: 3,
    img: imgCertificate3,
    title: 'Visualização de Dados com Seaborn',
    description: 'Visualização de Dados com Seaborn'
  },
  {
    id: 4,
    img: imgCertificate4,
    title: 'Visualização de Dados com Matplotlib',
    description: 'Visualização de Dados com Matplotlib'
  },
  {
    id: 5,
    img: imgCertificate5,
    title: 'Power BI Service ',
    description: 'No curso, aprendi a publicar e gerenciar relatórios, implementar segurança com RLS, conectar o Power BI a diversas fontes de dados (Google Sheets, SharePoint, APIs, bancos de dados) e configurar atualizações automáticas e fluxos de dados. Além disso, explorei dados em tempo real e streaming com Power Automate e formulários.'
  },
  {
    id: 6,
    img: imgCertificate6,
    title: 'Dominando o Power Automate',
    description: 'No curso da Empower Data, aprendi a automatizar processos com Power Automate, configurando triggers e ações, manipulando variáveis e loops, criando fluxos paralelos com JSON e integrando com Power BI, SharePoint e Teams. Também explorei o AI Builder para análises avançadas.'
  },
  {
    id: 7,
    img: imgCertificate7,
    title: 'Python Starter',
    description: 'O curso foi dividido em atividades focadas em programação e Python. Começou com a Apresentação do curso, seguida por Lógica de programação e Introdução a Python. Depois, abordou os Fundamentos da linguagem, o primeiro Projeto para construir uma calculadora, e o projeto de Software de gestão para locadora de carros. Incluiu o módulo OS, Gerenciamento de erros e depuração de código, o projeto de Pedra, Papel e Tesoura, Programação orientada a objetos, e finalizou com o projeto Simulando o caos em academias.'
  },
  {
    id: 8,
    img: imgCertificate8,
    title: 'Curso Completo De Banco de Dados',
    description: 'O curso de SQL cobriu desde os fundamentos até tópicos avançados. Iniciou com a introdução a bancos de dados relacionais e comandos básicos (SELECT, INSERT, UPDATE, DELETE), passando por joins, funções agregadas, e subconsultas. Abordou manipulação de dados, transações, otimização de performance com índices, e segurança. Incluiu a criação de Views, Stored Procedures e triggers, além de modelagem de dados e SQL para Big Data. O curso também contou com projetos práticos e preparação para certificações SQL.'
  },
  {
    id: 9,
    img: imgCertificate9,
    title: 'Curso COMPLETO de Excel do Básico ao Avançado + Dashboards',
    description: 'O curso de Excel, do básico ao avançado, cobriu desde funções básicas (SOMA, MÉDIA) até avançadas (PROCV, ÍNDICE, PROCH), gráficos e tabelas dinâmicas. Ensinou manipulação de dados, validação, macros e VBA para automação. A parte final focou na criação de dashboards interativos, com gráficos avançados e controles dinâmicos para visualização de dados. O curso incluiu exercícios práticos para aplicar os conhecimentos em cenários corporativos.'
  },
  {
    id: 10,
    img: imgCertificate10,
    title: 'Formação Microsoft Power BI Profissional',
    description: 'O curso abordou a transformação de dados com Power Query, modelagem dimensional (Star Schema e Snow Flake) e domínio de fórmulas DAX avançadas. Ensinou visualização de dados persuasiva e storytelling para apresentar informações de forma impactante. Também incluiu a implementação de projetos completos e gestão avançada no Power BI Service para compartilhamento e colaboração.'
  }
]

export const Certificates = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation()

  return(
    <section ref={ref} className="flex flex-col p-12 lg:px-24 mt-24">
      <div className="flex flex-col text-white self-center text-center">
        <span className="text-base">{t('Meus certificados')}</span>
        <h1 className="font-black italic text-4xl uppercase">{t('Certificados')}</h1>
      </div>
      <div className="flex flex-row flex-wrap text-white justify-center lg:justify-between mt-0 lg:mt-16">
        {certificatesData.map((certificate) => (
          <CardCertificate
            key={certificate.id}
            srcImg={certificate.img}
            title={t(`${certificate.title}`)}
            description={t(`${certificate.description}`)}
          />
        ))}
      </div>
    </section>
  )
})