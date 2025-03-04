interface CardCertificateProps{
  srcImg: string
  title: string
  description: string
}

export const CardCertificate = (certificateProp: CardCertificateProps) => {
  return(
    <div className="flex flex-col lg:flex-row gap-6 my-8 items-center text-center">
      <div className="flex w-52 h-52 items-center">
        <img src={certificateProp.srcImg} alt="img-project"/>
      </div>
      <div className="flex flex-col gap-2 -mt-2 lg:mt-0 text-start">
        <h3 className="uppercase font-black w-52 lg:w-64">{certificateProp.title}</h3>
        <p className="text-justify text-xs w-52 lg:w-64">{certificateProp.description}</p>
      </div>
    </div>
  )
}