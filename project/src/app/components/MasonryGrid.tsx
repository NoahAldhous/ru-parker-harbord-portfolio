import Masonry from 'react-masonry-css';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';

//light gallery
import type {LightGallery} from 'lightgallery/lightgallery';
//component import renamed to avoid conflict with type import on line above
import LightGalleryComponent from 'lightgallery/react';

// import styles
import '../../app/dependencies/lightgallery/css/lightgallery.css';
import '../../app/dependencies/lightgallery/css/lg-thumbnail.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';

interface MasonryGridProps {
    images:{
        alt:string, 
        src:string,
        staticImageData:StaticImageData,
        thumb:string
    }[]
}

export default function MasonryGrid({images}:MasonryGridProps){

    const lightboxRef = useRef<LightGallery | null>(null)

    const breakpointColumnsObj = {
        default: 3,
        1024: 3,
        768: 2,
        640: 1
      };

    return <>
    <Masonry 
        breakpointCols={breakpointColumnsObj} 
        className="flex gap-0 px-4 sm:px-0 sm:gap-8" 
        columnClassName=""
    >
        {images.map((image, idx) => (
            <AnimatePresence 
            mode="wait"
            key={idx}
            >
            <motion.div
            key={image.alt}
            className='md:overflow-clip'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
            variants={{
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
            }}
            >
            <Image 
                key={image.alt} 
                priority={true}
                quality={100}
                placeholder="blur" 
                src={image.staticImageData} 
                alt={image.alt} 
                className="sm:mb-8 mb-12 object-contain cursor-pointer md:transition md:duration-300 md:hover:scale-105"
                onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                }}
            />
            </motion.div>
        </AnimatePresence>
        ))}
    </Masonry>
    <LightGalleryComponent
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
        />
    <Footer/>
    </>
}