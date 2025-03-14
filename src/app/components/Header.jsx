"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { List, FacebookLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react";
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ black, isInverted }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const pathname = usePathname();

    const toggleNav = () => {
        setIsNavOpen(prev => {
            const newState = !prev;
            document.body.style.overflow = newState ? 'hidden' : 'auto';
            return newState;
        });
    };

    const closeNav = () => {
        setIsNavOpen(false);
        document.body.style.overflow = 'auto';
    };

    // Close menu and reset overflow when the route changes
    useEffect(() => {
        closeNav();
    }, [pathname]);

    return (
        <header className='absolute top-0 left-0 w-full px-6 lg:px-10 py-8 flex justify-between items-center'>
            <button className='p-2 lg:hidden' onClick={toggleNav}>
                <List color='#272727' weight='regular' size={32} />
            </button>
            <AnimatePresence>
                {isNavOpen && (
                    <motion.div 
                        className="px-6 py-8 fixed top-0 left-0 h-screen w-full bg-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className='p-2' onClick={closeNav}>
                            <List color='#272727' weight='regular' size={32} />
                        </button>
                        <div className="absolute right-0 bottom-[20%] px-16 w-3/4 text-right">
                            <Link href="/" className='mr-[10px]'>
                                <Image 
                                    src="/images/logo-desk.png"
                                    height={86}
                                    width={69}
                                    style={{ objectFit: "cover" }}
                                    alt='logo'
                                    className='inline-block'
                                />
                            </Link>
                            <nav className='mt-9'>
                                <ul className='text-right flex flex-col gap-8'>
                                    <li><Link href="/#o-nama" className='text-4xl' onClick={closeNav}>O nama</Link></li>
                                    <li><Link href="/galerija" className='text-4xl' onClick={closeNav}>Galerija</Link></li>
                                    <li><Link href="/katalog" className='text-4xl' onClick={closeNav}>Katalog</Link></li>
                                    <li><Link href="/#ponuda" className='text-4xl' onClick={closeNav}>Ponuda</Link></li>
                                    <li><Link href="#kontakt" className='text-4xl' onClick={closeNav}>Kontakt</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="hidden lg:flex lg:items-center">
                <Link href="/" className='mr-[10px]'>
                    <Image 
                        src="/images/logo-desk.png"
                        height={60}
                        width={60}
                        style={{ objectFit: "contain" }}
                        alt='logo'
                        className='inline-block h-[60px] w-[60px]'
                    />
                </Link>
                <nav>
                    <ul className={`flex items-center gap-4 ${isInverted && 'text-white'}`}>
                        <li><Link href="/#o-nama" className='text-lg 2xl:text-2xl p-2 2xl:px-4 hover:opacity-70 transition duration-300'>O nama</Link></li>
                        <li><Link href="/galerija" className='text-lg 2xl:text-2xl p-2 2xl:px-4 hover:opacity-70 transition duration-300'>Galerija</Link></li>
                        <li><Link href="/katalog" className='text-lg 2xl:text-2xl p-2 2xl:px-4 hover:opacity-70 transition duration-300'>Katalog</Link></li>
                        <li><Link href="/#ponuda" className='text-lg 2xl:text-2xl p-2 2xl:px-4 hover:opacity-70 transition duration-300'>Ponuda</Link></li>
                        <li><Link href="#kontakt" className='text-lg 2xl:text-2xl p-2 2xl:px-4 hover:opacity-70 transition duration-300'>Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="flex gap-1 lg:gap-5 lg:pr-10">
                {black
                    ? <>
                        <a className='p-1 hover:opacity-70 transition duration-300' href=""><FacebookLogo color="#272727" weight="regular" size={32} /></a>
                        <a className='p-1 hover:opacity-70 transition duration-300' href=""><LinkedinLogo color="#272727" weight="regular" size={32} /></a>
                        <a className='p-1 hover:opacity-70 transition duration-300' href="https://www.instagram.com/dosal.tiles/"><InstagramLogo color="#272727" weight="regular" size={32} /></a>
                    </>
                    : <>
                        <a className='p-1 hover:opacity-70 transition duration-300' href=""><FacebookLogo color="#fff" weight="regular" size={32} /></a>
                        <a className='p-1 hover:opacity-70 transition duration-300' href=""><LinkedinLogo color="#fff" weight="regular" size={32} /></a>
                        <a className='p-1 hover:opacity-70 transition duration-300' href="https://www.instagram.com/dosal.tiles/"><InstagramLogo color="#fff" weight="regular" size={32} /></a>
                    </>
                }
            </div>
        </header>
    );
};

export default Header;
