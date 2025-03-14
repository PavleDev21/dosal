import { Blueprint, Storefront } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const Options = () => {
  return (
    <section className='px-6 py-6'>
        <div className="flex flex-col items-center lg:justify-center lg:items-top xl:flex-row gap-10 py-16 max-w-6xl mx-auto">
            <h3 className='text-3xl mb-6 xl:w-1/4'>Bez obzira na izbor, garantujemo vrhunski kvalitet i dugotrajnost </h3>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                <div className="relative max-w-[350px] p-6 flex flex-col border-2 border-solid border-[#272727] mb-8 h-[180px]">
                    <Blueprint color="#272727" weight="regular" size={65} className='absolute top-0 left-[20px] -translate-y-1/2 bg-[#EFEEEC] p-2' />
                    <h4 className='text-2xl mb-3 pt-3'>Kompletna usluga</h4>
                    <p className='w-[90%]'>Obrada ploča po meri i profesionalna ugradnja od strane našeg majstora.</p>
                </div>
                <div className="relative max-w-[350px] p-6 flex flex-col border-2 border-solid border-[#272727] h-[180px]">
                    <Storefront color="#272727" weight="regular" size={65} className='absolute top-0 left-[20px] -translate-y-1/2 bg-[#EFEEEC] p-2' />
                    <h4 className='text-2xl mb-3 pt-3'>Prodaja pločica</h4>
                    <p className='w-[90%]'>Idealno za one koji već imaju svoj plan obrade i ugradnje.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Options