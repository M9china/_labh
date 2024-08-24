import Image from 'next/image'

export const Placeholder = () => {

    return(
        <div className="flex flex-col items-center bg-white mt-5">
            <Image width={1500} height={1500} src='/under_dev.png' alt='placeholder'/>
            <p className='text-xl font-bold text-gray-600 text-center'>This section is currrently under developement</p>
        </div>
    )
}