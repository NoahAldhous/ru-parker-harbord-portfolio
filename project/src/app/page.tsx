'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../app/components/Footer'

//image imports
import portrait from '../../public/images/home/portrait.jpg';
import videography from '../../public/images/home/videopgrahy.jpg'
import weddings from '../../public/images/home/weddings.jpg'

//OLD image import
import home1 from '../../public/images/home-page/home1.jpg';

//light gallery
import type {LightGallery} from 'lightgallery/lightgallery';
//component import renamed to avoid conflict with type import on line above
import LightGalleryComponent from 'lightgallery/react';

// import styles
import '../app/dependencies/lightgallery/css/lightgallery.css';
import '../app/dependencies/lightgallery/css/lg-thumbnail.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import ProjectCard from './components/NewProjectCard';
import Link from 'next/link';

export default function Homepage() {

  const images = [
    {
      src:  '/images/home-page/home2.jpg',
      thumb:  '/images/home-page/thumbnails/homethumb2.jpg'
    },
  {
    src:  '/images/home-page/home1.jpg',
    thumb:  '/images/home-page/thumbnails/homethumb1.jpg'
  },
  {
    src:  '/images/home-page/home3.jpg',
    thumb:  '/images/home-page/thumbnails/homethumb3.jpg'
  },
  {
    src:  '/images/home-page/home4.jpg',
    thumb:  '/images/home-page/thumbnails/homethumb4.jpg'
  },
  {
    src:  '/images/home-page/home6.jpg',
    thumb:  '/images/home-page/thumbnails/homethumb6.jpg'
  },
  {
    src:  '/images/home-page/home5.jpg',
    thumb:  '/images/home-page/thumbnails/homethumb5.jpg'
  },
  {
    src:  '/images/home-page/home7.jpg',
    thumb:  '/images/home-page/thumbnails/homethumb7.jpg'
  },
  {
    src:  '/images/home-page/home8.jpg',
    thumb:  '/images/home-page/thumbnails/homethumb8.jpg'
  },
  {
    src:  '/images/home-page/home9.jpg',
    thumb:  '/images/home-page/thumbnails/homethumb9.jpg'
  },
  {
    src: 'images/home-page/home10.jpg',
    thumb: '/images/home-page/thumbnails/homethumb10.jpg'
  },
  {
    src: '/images/home-page/home11.jpg',
    thumb: '/images/home-page/thumbnails/homethumb11.jpg'
  },
  {
    src: '/images/home-page/home12.jpg',
    thumb: '/images/home-page/thumbnails/homethumb12.jpg'
  },
  {
    src: '/images/home-page/home13.jpg',
    thumb: '/images/home-page/thumbnails/homethumb13.jpg'
  },
  ]

  const lightboxRef = useRef<LightGallery | null>(null)

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

  return (  
    <main className="flex sm:h-full sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-visible overflow-x-hidden">
      <section className="space-y-6 sm:space-y-0 flex h-full flex-col justify-start items-center p-2 sm:p-8 w-full">
        <section className="w-4/5 flex flex-row justify-evenly items-center py-24">
          <Image
            priority={true}
            placeholder='blur'
            src={portrait}
            alt='portrait'
            className='w-1/3 aspect-square object-cover rounded-3xl'
          />
          <p className='w-1/2 h-4/5 text-xl tracking-tight'>
            Hi! I&apos;m Ru - a photographer, videographer and born and raised Londoner.
            <br/>
            <br/>
            After graduating from film school, I got my first job in the film and TV industry as a runner, moving on to writing, working as a Director&apos;s Assistant and more. All while continuing to shoot videos and photos for friends and companies I worked for.
            <br/>
            <br/>
            I love telling stories visually and always have a camera in my hand. Whether it&apos;s being part of behind the scenes of film sets or on a couple&apos;s big day - I want to express the stories being told with images.
          </p>
        </section>
        <section className="w-full flex flex-col items-center py-10">
          <h2 className="font-displayFont text-8xl pb-10">My work</h2>
          <section className="w-full flex flex-row justify-evenly flex-wrap">
            <ProjectCard 
                imageSource={home1} 
                projectTitle='BTS and stills' 
                imageAlt='bts'
                url='bts-and-stills'
            />
            <ProjectCard 
                imageSource={weddings} 
                projectTitle='Weddings' 
                imageAlt='weddings'
                url='weddings'
            />
            <ProjectCard 
                imageSource={videography} 
                projectTitle='Videography' 
                imageAlt='videopgraphy'
                url='videography'
            />
          </section>
        </section>
        <section className="w-full flex justify-center py-24">
          <Link href='/contact'>
            <h2 className="font-displayFont text-8xl opacity-95 hover:-translate-y-2 hover:opacity-100 transition duration-200">Drop me a line</h2>
          </Link>
        </section>
        {/* <AnimatePresence mode="wait">
          <div className='space-y-6 sm:space-y-0  w-full flex-col-reverse flex sm:flex-row sm:justify-end'>
            <motion.div 
              className='sm:p-8 flex flex-col justify-end sm:mb-24'
              initial='initialState'
              whileInView='inViewState'
              exit='exitState'
              viewport={{ once: true }}
              variants={divVariants}
              transition={{
                  duration: 0.7,
                  delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
              }}
            >
              <Image
                priority={true}
                onClick={() => {
                    lightboxRef.current?.openGallery(1);
                }}
                placeholder='blur' 
                src={home1} 
                alt='home1'
                className='cursor-pointer mt-6 sm:mt-0'
              />
            </motion.div>
            <motion.div 
              className='space-y-6 sm:space-y-0 flex flex-col sm:items-end items-center'
              initial='initialState'
              whileInView='inViewState'
              exit='exitState'
              viewport={{ once: true }}
              variants={divVariants}
              transition={{
                  duration: 0.7,
                  delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
              }}
            >
              <Image
                priority={true}
                onClick={() => {
                    lightboxRef.current?.openGallery(0);
                }}
                placeholder='blur' 
                src={home2} 
                alt='home2'
                className='cursor-pointer sm:mb-24 sm:w-11/12'
              />
              <Image
                priority={true}
                onClick={() => {
                    lightboxRef.current?.openGallery(2);
                }}
                placeholder='blur' 
                src={home3} 
                alt='home3'
                className='cursor-pointer sm:mt-24 sm:pr-8 sm:pl-2'
              />
            </motion.div>
          </div>
          <motion.div 
            className='w-full flex justify-center'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(3);
                }}
              placeholder='blur' 
                src={home4} 
                alt='home4'
                className='cursor-pointer sm:mt-24 sm:w-5/12'
            />
          </motion.div>
          <motion.div 
            className='space-y-6 sm:space-y-0 w-full flex flex-col sm:flex-row items-center sm:pt-12 justify-between'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(4);
                }}
              placeholder='blur' 
                src={home6} 
                alt='home6'
                className='cursor-pointer sm:w-1/2'
            />
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(5);
                }}
              placeholder='blur' 
                src={home5} 
                alt='home5'
                className='cursor-pointer sm:w-5/12'
            />
          </motion.div>
          <motion.div 
            className='w-full flex justify-center'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(6);
                }}
              placeholder='blur' 
                src={home7} 
                alt='home7'
                className='cursor-pointer sm:mt-24 sm:w-5/12'
            />
          </motion.div>
          <motion.div 
            className='w-full flex sm:justify-end justify-center'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(7);
                }}
              placeholder='blur' 
                src={home8} 
                alt='home8'
                className='cursor-pointer sm:mt-24 sm:pr-2 sm:w-5/6'
            />
          </motion.div>
          <motion.div 
            className='space-y-6 sm:space-y-0 w-full flex sm:flex-row flex-col justify-between items-center sm:items-end'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(8);
                }}
              placeholder='blur' 
                src={home9} 
                alt='home9'
                className='cursor-pointer sm:mt-24 sm:ml-4 sm:mb-36 sm:pr-2 sm:w-1/2'
            />
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(9);
                }}
              placeholder='blur' 
                src={home10} 
                alt='home10'
                className='cursor-pointer sm:mt-24 sm:mr-6 sm:w-5/12'
            />
          </motion.div>
          <motion.div 
            className='w-full flex justify-center'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(10);
                }}
              placeholder='blur' 
                src={home11} 
                alt='home11'
                className='cursor-pointer sm:mt-24 sm:w-9/12'
            />
          </motion.div>
          <motion.div 
            className='space-y-6 sm:space-y-0 w-full flex sm:flex-row flex-col justify-between sm:items-end items-center'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(11);
                }}
              placeholder='blur' 
                src={home12} 
                alt='home12'
                className='cursor-pointer sm:mt-24 sm:ml-4 sm:mb-4 sm:pr-2 sm:w-1/2'
            />
            <Image
              priority={true}
              onClick={() => {
                    lightboxRef.current?.openGallery(12);
                }}
              placeholder='blur' 
                src={home13} 
                alt='home13'
                className='cursor-pointer sm:mt-24 sm:mr-2 sm:mb-32 sm:w-5/12'
            />
          </motion.div>
        </AnimatePresence> */}
      </section>
        {/* <LightGalleryComponent
          onInit={(ref) => {
              if (ref) {
                  lightboxRef.current = ref.instance
              }
          }}
          speed={500}
          download={false}
          plugins={[lgThumbnail]}
          dynamic
          dynamicEl={images.map(image => ({
              src: image.src, 
              thumb: image.thumb
          }))}
        /> */}
        <Footer/>
    </main>
  )
}
