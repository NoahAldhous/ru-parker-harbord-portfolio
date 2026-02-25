'use client';
import MasonryGrid from "@/app/components/MasonryGrid";

//image import
import images from './image-import'

export default function Page(){
    return <main className="flex sm:h-screen sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-auto overflow-x-hidden">
     <div className="flex flex-col items-center p-2 sm:p-12 sm:pb-2 w-full">
        <MasonryGrid images={images}/>
     </div>
    </main>
}