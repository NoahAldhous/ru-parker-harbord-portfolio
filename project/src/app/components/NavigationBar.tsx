'use client';

import NavigationModal from "./NavigationModal";
import Link from 'next/link';
import React, {useState} from 'react';
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

export default function NavigationBar() {

    const navBarItems = [
        {
          title: "Home" ,
          href: "/"
        },
        {
          title: "Photo" ,
          href: "/photo"
        },
        // {
        //   title: "Video" ,
        //   href: "/video"
        // },
        // {
        //   title: "Weddings" ,
        //   href: "/weddings"
        // },
        {
          title: "Film Photography" ,
          href: "/film-photography"
        },
        {
          title: "About" ,
          href: "/about"
        },
        {
          title: "Contact" ,
          href: "/contact"
        },
    ];

    const navModalItems = [
        {
            title: "Home" ,
            href: "/"
          },
          {
            title: "Projects" ,
            href: "/project"
          },
          {
            title: "Film Photography" ,
            href: "/film-photography"
          },
          {
            title: "About" ,
            href: "/about"
          },
          {
            title: "Contact" ,
            href: "/contact"
          },
    ]

    const [navigationModalOpen, setNavigationModalOpen] = useState<boolean>(false);

    const pathname = usePathname();

    function handleClose(){
        setNavigationModalOpen(false);
    }

    return <>
        <div className="hidden sm:flex flex-row w-screen top-0 left-0 overflow-x-hidden fixed z-2000 py-6 px-6 sm:px-12 justify-between bg-gradient-to-b from-semiPrimary from-30% to-85% dark:from-semiDark">
            <Link 
                onClick={handleClose} 
                key={'/'}
                className='whitespace-nowrap transition-all duration-600 opacity-90 md:hover:opacity-100 z-20'
                href={'/'}
            >
                <motion.h1
                    className="mix-blend-difference tracking-wide font-superRetro italic text-xs sm:text-sm md:text-xl lg:text-3xl align-middle w-1/2 items-center overflow-x-visible"
                    initial='initialState'
                    animate='animateState'
                    exit='exitState'
                    transition={{
                        duration: 0.75,
                        delay: 0.3
                    }}
                    variants={{
                        initialState: {
                            opacity:0,
                            y:-20
                        },
                        animateState: {
                            opacity: 1,
                            y:0
                        },
                        exitState: {
                            opacity: 0
                        },
                    }}
                >
                    Ru Parker-Harbord
                </motion.h1>
            </Link>
            <motion.section 
                layout
                className="flex flex-row justify-end items-center w-1/2 m-0 sm:ml-12 md:ml-8 lg:ml-10 p-0 pr-2"
                initial='initialState'
                animate='animateState'
                exit='exitState'
                transition={{
                    duration: 0.75,
                    delay: 0.3
                }}
                variants={{
                    initialState: {
                        opacity:0,
                        y:-20
                    },
                    animateState: {
                        opacity:1,
                        y:0
                    },
                    exitState: {
                        opacity: 0
                    },
                }}
            >
                    {navBarItems.map((item) => (
                        <Link 
                            onClick={handleClose} 
                            key={item.href}
                            className={`${
                                pathname === item.href 
                                    ? 'opacity-100'
                                    : 'opacity-70'
                                } p-0 px-2 sm:px-1 md:px-1 lg:px-2 whitespace-nowrap transition-all duration-600 relative flex flex-col items-center hover:opacity-100 cursor-pointer`} 
                            href={item.href}                      
                        >
                        <p className='text-xs sm:text-xs md:text-md lg:text-lg cursor-pointer'>
                        {item.title}
                            </p> 
                            {pathname === item.href ? (
                        <motion.div
                        className='bottom-0 inset-x-0 sm:h-px md:h-px lg:h-0.5 bg-dark dark:bg-primary rounded-lg z-0 w-full'
                        layoutId="underline"
                        />
                        ) : null}
                        </Link>
                    ))}
            </motion.section>
            </div>
        <motion.div 
            className="sm:hidden flex flex-row w-full top-0 fixed z-2000 py-6 px-6 justify-between bg-gradient-to-b from-bgprimary from-10% to-70% dark:from-bgdark"
            initial='initialState'
            animate='animateState'
            exit='exitState'
            transition={{
                duration: 0.75,
                delay: 0.3
            }}
            variants={{
                initialState: {
                    opacity:0,
                    y:-20
                },
                animateState: {
                    opacity: 1,
                    y:0
                },
                exitState: {
                    opacity: 0
                },
            }}
            >
            <h1 className="font-superRetro italic text-xs align-middle p-0 w-2/3 items-center overflow-x-visible">
                Ru Parker-Harbord
            </h1>
            <section className="flex flex-row justify-end items-center w-1/3">
                <button onClick={() => setNavigationModalOpen(!navigationModalOpen)} className="p-0 pr-0.5 text-right font-superRetro italic text-xs align-middle items-center overflow-x-visible">Menu</button>
            </section>
            {navigationModalOpen && (
                <NavigationModal 
                    isOpen={navigationModalOpen}
                    handleClose={() => setNavigationModalOpen(!navigationModalOpen)}
                    navModalItems={navModalItems}
                />
            )}
        </motion.div>
    </>
}