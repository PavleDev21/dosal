import React from 'react'

const Banner = () => {
const bannerStyle = {
    backgroundImage: 'url(/images/banner.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    };

  return (
    <section style={bannerStyle} className='h-screen flex'>
        <div className="w-3/5 xl:w-[45%] bg-fadedprimary h-full flex items-center">
            <div className="p-5 lg:px-12 xl:px-16">
                <h1 className='w-full text-6xl lg:text-8xl 2xl:text-9xl mb-3 xl:mb-6 pl-2 lg:p-0'>Dosal</h1>
                <p className='text-md 2xl:text-3xl xl:w-5/6'>Luksuzne porcelanske ploče za svaki prostor – elegancija i dugotrajnost u jednom.</p>
            </div>
        </div>
    </section>
  )
}

export default Banner