import Image from 'next/image'
import React from 'react'

export const Placeholder: React.FC<{title: string}> = ({title}) => {

    return(
        <div className="flex flex-col items-center bg-white mt-16">
            <Image width={1500} height={1500} src='/under_dev.png' alt='placeholder'/>
            <p className='text-xl font-bold text-gray-600 leading-[2rem] text-center'>{title}</p>
        </div>
    )
}