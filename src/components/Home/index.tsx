export const Home = () => {
  return(
    <section className="flex flex-col-reverse lg:flex-row items-center mt-12 gap-7 text-white px-12 lg:px-24">
      <div className="flex flex-col">
        <span className="text-base italic">Olá, sou o </span>
        <h1 className="text-6xl lg:text-8xl italic uppercase font-black">gabriel</h1>
        <h1 className="text-6xl lg:text-8xl italic uppercase font-black ml-12 -mt-2">rangel</h1>
        <span className="text-base italic ml-auto">Analista de dados</span>
      </div>
      <div className="w-64 h-64 rounded-full shadow-portfolio lg:ml-auto"/>
    </section>
  )
}