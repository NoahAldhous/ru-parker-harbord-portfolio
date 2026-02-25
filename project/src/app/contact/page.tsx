'use client';

import ContactLink from '../components/ContactLink';
import { motion } from 'framer-motion'; 
import Link from 'next/link';

export default function Page(){

    const contactItems = [
        {
            firstLineText:'Follow me on',
            secondLineText:'Instagram',
            url:'https://www.instagram.com/rubyparkerh/',
            isDownload:false
        },
        {
            firstLineText:'Send me an',
            secondLineText:'Email',
            url:'mailto:rubyparkerphotography@gmail.com',
            isDownload:false
        },
        // {
        //     firstLineText:'Download my',
        //     secondLineText:'Portfolio',
        //     url:'/data/RubyParkerPortfolio.pdf',
        //     isDownload:true
        // }
    ];

    const mainVariant = {
        hidden: {
            opacity: 1
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                when: "beforeChildren", //use this instead of delay
                staggerChildren: 0.2, //apply stagger on the parent tag
            },
        },
    };

    const divVariant = {
        hidden: {
            opacity:0,
            x:-20
        },
        visible: {
            opacity:1,
            x:0,
            transition: {
                duration:0.8
            }
        }
    }

    return <motion.main 
                className="flex flex-col space-y-5 sm:space-y-4 md:space-y-8 lg:space-y-10 justify-center items-start space-around overflow-y-hidden overflow-x-hidden h-screen w-screen p-12 sm:p-24 bg-primary dark:bg-dark"
                initial='hidden'
                animate='visible'
                variants={mainVariant}
            >
            {contactItems.map((item, idx) => (
                                        <motion.div
                                            variants={divVariant}
                                            key={idx}
                                            >
                                                <ContactLink 
                                                    firstLineText={item.firstLineText}
                                                    secondLineText={item.secondLineText}
                                                    url={item.url}
                                                    isDownload={item.isDownload}
                                                />
                                        </motion.div> 
                                    ))}
    </motion.main>
}