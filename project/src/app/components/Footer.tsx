'use client';

import Link from 'next/link';

export default function Footer(){

    const currentYear:number = new Date().getFullYear()

    return <div className='w-screen flex flex-col sm:flex-row items-center justify-around mb-4 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base'>
        <section className='sm:w-1/3 flex justify-center'>
            <Link className="" href='https://www.instagram.com/rubyparkerh/' target="_blank">@rubyparkerh</Link>
        </section>  
        <section className='sm:w-1/3 flex justify-center'>
            <p className="text-md">&#169; Ru Parker-Harbord 2023-{currentYear}</p>
        </section>  
        <section className='sm:w-1/3 flex justify-center'>
            <Link className="" href='mailto:rubyparkerphotography@gmail.com' target="_blank">rubyparkerphotography@gmail.com</Link>
        </section>  
    </div>
}