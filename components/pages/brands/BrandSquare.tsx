import Image from 'next/image';
import * as React from 'react';

export interface IBrandSquareProps {
    src: string;
    alt: string;
    className?: string;
}

export function BrandSquare(props: IBrandSquareProps) {
    return (
        <div className="relative border-2 border-transparent rounded-2xl overflow-hidden">
            <Image src={`${props.src}_palette.svg`} width={147} height={24} alt={`${props.alt} palette`} className={`absolute w-fit bottom-4 left-4 border bg-background p-1 z-10`} />
            <Image src={`${props.src}.svg`} width={500} height={500} alt={props.alt} className={`w-full ${props.className}`} />
        </div>
    );
}
