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
    const { getOrders } = useAuth()
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
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/order-payment/${dataStore.user}/${dataStore.id}`, formData, {
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
        <div className="font-[sans-serif] lg:flex lg:items-center lg:justify-center lg:h-screen max-lg:py-4">
            <div className="bg-[#e6e6e663] p-8 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center">
                    Checkout.
                </h2>
                <div className="grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16">
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold text-gray-800">
                            Choose your payment method
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 mt-4">
                            <div className="flex items-center">
                                <label htmlFor="card" className="ml-4 flex gap-2">
                                    <img
                                        src="https://readymadeui.com/images/visa.webp"
                                        className="w-12"
                                        alt="card1"
                                    />
                                    <img
                                        loading='lazy'
                                        src="https://readymadeui.com/images/american-express.webp"
                                        className="w-12"
                                        alt="card2"
                                    />
                                    <img
                                        loading='lazy'
                                        src="https://readymadeui.com/images/master.webp"
                                        className="w-12"
                                        alt="card3"
                                    />
                                </label>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
                                <div>
                                    <CardNumberElement className="px-2 py-3 text-blue border m-auto" />
                                </div>
                                <div>
                                    <CardExpiryElement className="px-2 py-3 text-blue border m-auto" />
                                </div>
                                <div>
                                    <CardCvcElement className="px-2 py-3 text-blue border m-auto" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <button type="submit" disabled={loading} className="w-full h-12 bg-blue-500 text-white bg-blue  m-auto">
                                    {loading ? "Processing..." : "Pay"}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white p-6 rounded-md max-lg:-order-1">
                        <h3 className="text-lg font-bold text-gray-800">Summary</h3>
                        <ul className="text-gray-800 mt-6 space-y-3">
                            <li className="flex flex-wrap gap-4 text-sm">
                                Sub total <span className="ml-auto font-bold">${dataStore?.price}</span>
                            </li>
                            <hr />
                            <li className="flex flex-wrap gap-4 text-base font-bold">
                                Total <span className="ml-auto">${dataStore?.price}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

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
