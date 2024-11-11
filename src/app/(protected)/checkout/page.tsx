'use client'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import { convertToSubcurency } from '@/lib';
import useCart from '@/components/Hooks/useCart';
import { PayButton } from '@/components';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');  
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
 function CheckoutPage (){
    const amount = useCart();

    return(
        <main className=''>
            <Elements options={{mode: 'payment', currency: 'usd', amount: convertToSubcurency(amount.cart?.orderTotal),}} stripe={stripePromise}>
                <PayButton total={convertToSubcurency(amount.cart?.orderTotal)}/>

            </Elements>
        </main>
    )
}

export default CheckoutPage;
