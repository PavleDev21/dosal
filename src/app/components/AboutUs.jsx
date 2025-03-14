import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <section id='o-nama' className='pt-20 px-6 xl:p-0 xl:flex xl:h-screen'>
        <div className="text-center flex flex-col items-center relative pb-60 xl:w-[80%] xl:py-20 xl:px-16 2xl:justify-center">
            <h3 className='text-6xl mb-10 xl:mb-20 2xl:self-start'>O nama</h3>
            <div className="xl:pr-[200px] 2xl:pr-[400px]">
                <p className='mb-3 max-w-[450px] xl:text-left xl:max-w-none xl:self-start 2xl:text-lg'>Dobrodošli u DOSAL, vašeg pouzdanog partnera za vrhunsku keramiku. Naša firma je osnovana s jasnim ciljem – da na tržište donesemo visokokvalitetne A-klase porcelanske pločice. U našoj ponudi pronaći ćete širok izbor pločica različitih boja, tekstura i formata, savršenih za zidove, podove, kuhinjske radne ploče, stepenice, šankove i stolove.</p>
                <p className='mb-3 max-w-[450px] xl:text-left xl:max-w-none xl:self-start 2xl:text-lg'>Kombinujemo moderan dizajn, luksuz i minimalizam, pružajući kvalitetne i dugotrajne proizvode. Naš cilj je da vaš prostor podignemo na viši nivo.</p>
            </div>
            <Link href='/katalog' className='uppercase text-xl p-4 border-2 border-solid border-black flex w-max xl:w-auto mt-10 xl:mt-28 xl:self-start'>Pogledajte naš katalog</Link>
            <Image
                className='w-[80%] h-[350px] xl:w-[500px] xl:h-[440px] 2xl:w-[800px] 2xl:h-[850px] absolute z-10 -bottom-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 xl:bottom-1/2 xl:right-0 xl:translate-y-1/2'
                src="/images/about-floating.jpg"
                width={0}
                height={0}
                sizes='100%'
                alt='sbr'
                style={{objectFit: "cover"}}
            />
        </div>
        <div className="-mx-6 xl:mx-0">
            <Image
                // className='blur-[2px]'
                src="/images/about.jpg"
                width={0}
                height={0}
                sizes="100%"
                style={{ objectFit: "cover" }} // optional
                className='w-full h-[330px] xl:h-full'
                alt='sbr'
            />
        </div>
    </section>
  )
}

export default AboutUs