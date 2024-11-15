'use client'
import { useEffect, useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { convertToSubcurency } from '@/lib';

export const PayButton = ({total}: {total: any}) => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [errorMessage, setErrorMessage] = useState<string>();
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const amount = convertToSubcurency(total);
        console.log('Converted Amount:', amount); 
        fetch('/api/payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify({amount: convertToSubcurency(total)}),
        }).then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
    }, [total])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const {error: submitError} = await elements.submit();
        if(submitError){
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        //confirm payment
        const {error} = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams:{
                return_url:`http://www.localhost:3000/collection`,
            },
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            return;
        }
        setLoading(false)
    }

    if(!clientSecret || !stripe || !elements) {
        return <div className='text-black'>Loading...</div>;
    }

    return(
        <form onSubmit={handleSubmit} className='pt-[5rem] p-2  rounded-md'>
            {clientSecret && <PaymentElement/>}

            {errorMessage && <div>{errorMessage}</div>}
            <button className='bg-black disabled:opacity-50 disabled:animate-pulse' disabled={!stripe || loading}>
               {!loading ? `Pay R${total}` : 'Processing...'}
            </button>
        </form>
    )
}
