import React from 'react'

const PagesBanner = ({title, text}) => {
  return (
    <section className='h-screen md:h-[70vh] xl:h-screen pt-60 lg:pt-0 xl:pl-10 px-[30px] lg:flex lg:justify-center lg:flex-col bg-[url(/images/MobileKatalog.jpg)] xl:bg-[url(/images/Katalog.jpg)] bg-cover bg-center'>
        <h1 className="text-6xl md:text-7xl text-left">{title}</h1>
        <p className="text-left md:text-lg text-gray-600 mt-8 md:max-w-xl">
            {text}
        </p>
    </section>
  )
}

export default PagesBanner