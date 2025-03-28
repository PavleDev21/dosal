"use client"
import { Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, Phone } from '@phosphor-icons/react/dist/ssr';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });
    const [status, setStatus] = useState({ message: '', success: null });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (status.message) {
            const timer = setTimeout(() => {
                setStatus({ message: '', success: null });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [status.message]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ message: '', success: null });

        emailjs.send('service_lh4ee9v', 'template_mprjg6c', formData, 'I44gN7f0l9Qlzq4B-')
            .then((response) => {
                console.log('Success!', response.status, response.text);
                setStatus({ message: 'Vaša poruka je uspešno poslata!', success: true });
                setFormData({ name: '', contact: '', message: '' });
            })
            .catch((error) => {
                console.log('Failed...', error);
                setStatus({ message: 'Došlo je do greške. Pokušajte ponovo.', success: false });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const footerStyle = {
        backgroundImage: 'url(/images/gallery/gallery-10.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <footer id='kontakt' style={footerStyle} className='flex justify-end pt-60 md:pt-0'>
            <div className="relative z-10 bg-fadedprimary px-8 py-16 md:p-12 md:p-16 w-full md:w-[45%] md:max-w-2xl">
                <h2 className="text-4xl md:text-3xl mb-2 text-left">POŠALJITE NAM UPIT</h2>
                <p className="text-[#272727] text-right mb-6 max-w-[80%] ml-auto text-sm">I mi ćemo Vas kontaktirati u najkraćem roku</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-7">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Vaše ime" className="w-full p-3 bg-transparent border-b border-[#272727] text-[#272727] placeholder-[#272727] focus:outline-none focus:ring-0" required />
                    <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Broj telefona ili Email" className="w-full p-3 bg-transparent border-b border-[#272727] text-[#272727] placeholder-[#272727] focus:outline-none focus:ring-0" required />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Vaša poruka" rows={5} className="w-full p-3 resize-none bg-transparent border-b border-[#272727] text-[#272727] placeholder-[#272727] focus:outline-none focus:ring-0" required />
                    <button type="submit" className="w-full mt-10 p-4 md:max-w-[300px] md:ml-auto bg-[#272727] text-white font-semibold hover:opacity-70 transition duration-300" disabled={loading}>
                        {loading ? 'SLANJE...' : 'POŠALJITE UPIT'}
                    </button>
                </form>
                {status.message ? (
                    <p className={`text-center text-sm pb-1 ${status.success ? 'text-green-600' : 'text-red-600'}`}>
                        {status.message}
                    </p>
                ) : <p className='h-[24px]'></p>}
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
    );
};

export default Footer;
