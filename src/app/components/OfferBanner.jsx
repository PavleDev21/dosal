import React from 'react'

const OfferBanner = ({title, description, background, heroPosition}) => {
const bannerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    };

  return (
    <section style={bannerStyle} className={`h-screen flex bg-${heroPosition} md:bg-center`}>
        <div className="w-3/5 xl:w-[45%] bg-fadedprimary h-full flex items-center">
            <div className="p-5 lg:px-12 xl:px-16">
                <h1 dangerouslySetInnerHTML={{ __html: title }} className='w-full text-4xl lg:text-8xl 2xl:text-9xl mb-3 xl:mb-6 lg:p-0' />
                <p className='text-md 2xl:text-3xl xl:w-5/6'>{description}</p>
            </div>
        </div>
    </section>
  )
}

export default OfferBanner