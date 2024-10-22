import Image from 'next/image'
import React from 'react'

export const Placeholder: React.FC<{title: string}> = ({title}) => {

    return(
        <div className="flex flex-col items-center bg-white pt-16">
            <Image width={1500} height={1500} src='/under_dev.png' alt='placeholder' className=' sm:text-xl object-cover sm:h-[23rem] sm:w-[25rem] '/>
            <p className='text-xl font-bold text-black leading-[2rem] sm:pb-10 text-center mt-4'>{title}</p>
        </div>
    )
}