'use client';

import Link from 'next/link';

interface ContactLinkProps {
    text: string;
    url: string;
    isDownload: boolean;
}

export default function ContactLink({text, url, isDownload}: ContactLinkProps){
    return <div>    
        <Link download={isDownload} className="font-displayFont tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-6xl align-middle transition-all duration-600 lg:opacity-90 lg:hover:opacity-100 hover:tracking-wider" href={url} target="_blank">{text}</Link>
    </div>
}