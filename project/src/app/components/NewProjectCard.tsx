'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    imageSource: StaticImageData;
    projectTitle: string;
    imageAlt: string;
    url: string
}

export default function ProjectCard({imageSource, projectTitle, imageAlt, url}:ProjectCardProps){

    const divVariants = {
        initialState: {
            opacity:0,
            y:15
        },
        inViewState: {
            opacity: 1,
            y:0
        },
        exitState: {
            opacity: 0,
            y:15
        },
    }

        return <motion.div 
                    className = "w-2/5 aspect-[3/2] p-12"
                    key={imageAlt}
                    initial='initialState'
                    whileInView='inViewState'
                    exit='exitState'
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
                    }}
            variants={divVariants}
            >
                <div className='relative w-full group overflow-hidden aspect-[3/2] rounded-3xl'>
                    <Image 
                        placeholder='blur' 
                        className="h-full absolute object-cover bottom-0 transition duration-300 lg:group-hover:scale-125" 
                        priority={true}
                        src={imageSource} 
                        alt={imageAlt} 
                        quality={100}
                    />
                    <Link 
                        className='group absolute h-full w-full flex justify-center items-center text-center' 
                        href={`/photo/${url}`}
                    >
                        <div className='absolute inset-0 transition duration-300 bg-dark dark:bg-primary opacity-30 group-hover:opacity-80'></div>
                        <p className='relative opacity-95 font-displayFont z-10 text-6xl group-hover:opacity-100 text-primary dark:text-dark'>
                            {projectTitle}
                        </p>
                    </Link> 
                </div>
                <Link href={`/photo/${url}`} className="mt-6 lg:hidden">
                    {projectTitle}
                </Link>
            </motion.div> 
}