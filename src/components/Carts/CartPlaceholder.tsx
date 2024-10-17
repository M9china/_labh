import Image from 'next/image'
import Link from 'next/link'

export const CartPlaceholder = () => {

    return(
        <div className='flex flex-col items-center mt-5'>
            <Image src='/emptyCart.png' width={1500} height={1500} alt='' className='h-[16rem]'/>
            <h1 className='text-2xl font-semibold mt-5 text-black'>Your cart is empty!</h1>
            <Link href='/collection' className='mt-5 bg-black py-1.5 px-2'>
            Shop collection now
            </Link>

        </div>
    )
}