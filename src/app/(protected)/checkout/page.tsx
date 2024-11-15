'use client'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import useCart from '@/components/Hooks/useCart';
import { PayButton } from '@/components';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');  
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
 function CheckoutPage (){
    const amount = useCart();

    return(
        <main className='bg-white'>
            <Elements options={{mode: 'payment', currency: 'usd', amount: amount.cart?.orderTotalInCents ?? 10,}} stripe={stripePromise}>
                <PayButton total={amount.cart?.orderTotalInCents ?? 10}/>

            </Elements>
        </main>
    )
}

export default CheckoutPage;
