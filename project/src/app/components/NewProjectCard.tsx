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
                    className = "w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
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
                <div className='relative pb-portrait w-full h-full group overflow-hidden'>
                    <Image 
                        placeholder='blur' 
                        className="h-full w-full absolute object-cover bottom-0 transition duration-300 lg:group-hover:scale-125" 
                        priority={true}
                        src={imageSource} 
                        alt={imageAlt} 
                        quality={100}
                    />
                    <Link 
                        className='transition duration-300 absolute text-2xl text-primary dark:text-dark h-full w-full flex justify-center items-center text-center tracking-wide bg-dark dark:bg-primary opacity-0 lg:hover:opacity-80' 
                        href={`/photo/${url}`}
                    >
                        {projectTitle}
                    </Link> 
                </div>
                <Link href={`/photo/${url}`} className="mt-6 lg:hidden">
                    {projectTitle}
                </Link>
            </motion.div> 
}