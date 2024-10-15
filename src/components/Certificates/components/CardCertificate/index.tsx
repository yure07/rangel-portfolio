interface CardCertificateProps{
  srcImg: string
  title: string
  description: string
}

export const CardCertificate = (certificateProp: CardCertificateProps) => {
  return(
    <div className="flex flex-col lg:flex-row gap-6 my-8 mx-auto items-center text-center">
      <div className="w-48 h-48 lg:w-44 lg:h-44 bg-[#1E1E1E] shadow-portfolio"/>
      <div className="flex flex-col gap-2 lg:text-start">
        <h3 className="uppercase text-base lg:text-xl font-black">{certificateProp.title}</h3>
        <p className="text-justify text-xs w-48 lg:w-64 px-2 lg:p-0">{certificateProp.description}</p>
      </div>
    </div>
  )
}