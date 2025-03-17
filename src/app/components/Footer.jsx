import { Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, Phone } from '@phosphor-icons/react/dist/ssr';
import React from 'react'

const Footer = () => {
    const footerStyle = {
        backgroundImage: 'url(/images/gallery/gallery-10.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
  return (
    <footer id='kontakt' style={footerStyle} className='flex justify-end pt-60 md:pt-0'>
         {/* Contact Form */}
      <div className="relative z-10 bg-fadedprimary px-8 py-16 md:p-12 md:p-16 w-full md:w-[45%] md:max-w-2xl">
        <h2 className="text-4xl md:text-3xl mb-2 text-left">
          POŠALJITE NAM UPIT
        </h2>
        <p className="text-[#272727] text-right mb-6 max-w-[80%] ml-auto text-sm">
          I mi ćemo Vas kontaktirati u najkraćem roku
        </p>
        <form className="flex flex-col gap-4 mb-10">
          <input 
            type="text" 
            placeholder="Vaše ime"
            className="w-full p-3 bg-transparent border-b border-[#272727] text-[#272727] placeholder-[#272727] focus:outline-none focus:ring-0"
          />
          <input 
            type="text" 
            placeholder="Broj telefona ili Email" 
            className="w-full p-3 bg-transparent border-b border-[#272727] text-[#272727] placeholder-[#272727] focus:outline-none focus:ring-0"
          />
          <textarea 
            placeholder="Vaša poruka"
            rows={5}
            className="w-full p-3 resize-none bg-transparent border-b border-[#272727] text-[#272727] placeholder-[#272727] focus:outline-none focus:ring-0"
          />
          <button 
            type="submit" 
            className="w-full mt-10 p-4 md:max-w-[300px] md:ml-auto bg-[#272727] text-white font-semibold hover:opacity-70 transition duration-300"
          >
            POŠALJITE UPIT
          </button>
        </form>
        <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between gap-3 xl:gap-10 align-center">
                <div className="flex items-center justify-center gap-2">
                    <Envelope color='#272727' size={32}/>
                    <a className='text-lg hover:opacity-70 transition duration-300' href="mailto:dosal.sd@gmail.com">dosal.sd@gmail.com</a>
                </div>
                <div className="flex items-center justify-center gap-2 hidden">
                    <Phone color='#272727' size={32}/>
                    <a className='text-lg hover:opacity-70 transition duration-300' href="tel:+38164728928">+381 64 728 928</a>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <a className='p-1 hover:opacity-70 transition duration-300' href=""><FacebookLogo color="#272727" weight="regular" size={37} /></a>
                <a className='p-1 hover:opacity-70 transition duration-300' href=""><LinkedinLogo color="#272727" weight="regular" size={37} /></a>
                <a className='p-1 hover:opacity-70 transition duration-300' href="https://www.instagram.com/dosal.tiles/"><InstagramLogo color="#272727" weight="regular" size={37} /></a>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer