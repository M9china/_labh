import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(stripeKey as string, {
    apiVersion: '2024-10-28.acacia',
});
export async function POST(request: NextRequest) {
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 50,
            currency: 'usd',
            automatic_payment_methods: {enabled: true}, //['card_present'],
        });
        return NextResponse.json({clientSecret: paymentIntent.client_secret});
    } catch (error){
        console.error('Internal error', error);

        return NextResponse.json({error: {message: 'Internal error'}}, {status: 500});
    }

}
