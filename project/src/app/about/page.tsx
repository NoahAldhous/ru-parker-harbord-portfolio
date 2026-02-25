'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import profilePicture from '../../../public/images/about/ruby-portrait.png';
import Link from 'next/link';
import { useState } from 'react';

export default function Page(){

    function handleClick(){
        window.open('https://www.instagram.com/rubyparkerh/','_blank')
    }

    return <main className="justify-center flex h-screen flex-row items-center p-4 md:p-16 xl:p-24 pt-20 xl:pt-24 bg-primary dark:bg-dark">
     <section className='w-full h-full flex lg:flex-row flex-col items-center md:justify-start lg:justify-evenly'>
        <motion.div
                className='w-7/12 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-4 mt-8 md:mt-6 lg:mt-0 lg:mb-0'
                initial='initialState'
                whileInView='inViewState'
                exit='exitState'
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: 0.1
                }}
                variants={{
                    initialState: {
                        opacity:0,
                        x:-15
                    },
                    inViewState: {
                        opacity: 1,
                        x:0
                    },
                    exitState: {
                        opacity: 0,
                        x:-15
                    },
                }}
                >
                <Image 
                    priority={true}
                    quality={100}
                    placeholder="blur" 
                    src={profilePicture} 
                    alt='ru in profile'
                    className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                    onClick={handleClick}
                />
        </motion.div>
        <section className='flex flex-col w-10/12 sm:w-2/3 md:w-2/3 lg:w-1/2 text-xs sm:text-xs md:text-base lg:text-base xl:text-lg'>
            <motion.div
                    className='w-full'
                    initial='initialState'
                    whileInView='inViewState'
                    exit='exitState'
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.1
                    }}
                    variants={{
                        initialState: {
                            opacity:0,
                            x:15
                        },
                        inViewState: {
                            opacity: 1,
                            x:0
                        },
                        exitState: {
                            opacity: 0,
                            x:15
                        },
                    }}
            >
                <h2 className='font-superRetro italic text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:mb-2'>
                    Hello
                </h2>
                <p>
                I&apos;m Ru. I&apos;m a Photographer, Writer and Director based in London.
                <br/>
                <br/>
                I have always enjoyed photography and before freelancing professionally in this field, I worked primarily in Film and Television. I love to tell stories with visuals and to explore what a picture can say.
                <br/>
                <br/>
                I have worked in a variety of different environments, including Behind the Scenes photography, Weddings, <Link className="transition duration-300 hover:underline" href='/project/cafe-melo'>Brand work</Link> and Red Carpet premieres. I have a cinematic documentary style and love to capture people in their most natural state. 
                <br/>
                <br/>
                Whilst I am proficient in all types of photography, shooting on film is my favourite way of recording these moments. I&apos;ve been doing film photography for almost a decade now. It&apos;s timeless and adds an organic look which is perfect for street photography and rustic weddings.
                <br/>
                <br/>
                If you&apos;re looking for a photographer for an event, headshots, branding or even just to get some nice pictures for yourself or someone you love, please don&apos;t hesitate to get in touch and we can discuss further! 
                </p>
            </motion.div>
        </section>
     </section>
    </main>
}