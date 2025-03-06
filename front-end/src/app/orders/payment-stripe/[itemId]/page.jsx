'use client'
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/context";
import { useUser } from "@clerk/nextjs";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
    const { user } = useUser()
    const {getOrders} = useAuth()
    const localData = localStorage.getItem('payment-data')
    const dataStore = JSON.parse(localData);
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const Router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        const cardElement = elements.getElement(CardNumberElement);

        // Check if the card
        if (!cardElement) {
            setLoading(false);
            alert("Card element is not loaded properly.");
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            setLoading(false);
            alert(error.message);
            return;
        }

        const formData = {
            amount: dataStore.price * 100,
            paymentMethodId: paymentMethod.id,
            currency: "USD",
            customerId: dataStore.user,
            orderId: dataStore.id,
        }

        // Send Data To server 
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/order-payment/${dataStore.user}/${dataStore.id}`, formData , {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setLoading(false);

        // Check if payment was successful
        if (res.status === 200) {
            toast.success(res.data.message)
            localStorage.removeItem('payment-data');
            getOrders(user.id)
            Router.push('/orders/success')
        } else {
            alert("Payment failed: " + data.message);
        }
    };

    return (
        <form className="bg-blu p-5 flex flex-col gap-3 w-1/2 m-auto mt-10" onSubmit={handleSubmit}>
            <CardNumberElement className="w-1/2 h-10 px-2 border m-auto " />
            <CardExpiryElement className="w-1/2 h-10 px-2 border m-auto " />
            <CardCvcElement className="w-1/2 h-10 px-2 border m-auto " />
            <button type="submit" disabled={loading} className="w-1/2 h-12 bg-blue-500 text-white m-auto">
                {loading ? "Processing..." : "Pay"}
            </button>
        </form>
    );
};

const StripePaymentPage = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default StripePaymentPage;
