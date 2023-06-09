import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
const stripePay = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
try {
  var stripePromise;
  async function optS() {
    stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
  }
  optS();
} catch (err) {
  console.log("err", err);
}

const Cart = () => {
  const [clientSec, setclientSec] = useState("");
  const [StripeOptions, setStripeOptions] = useState(null);
  const products = useSelector((state) => {
    return state.products;
  });
  const getTotalAmount = () => {
    let total = 0;
    products.cart.forEach((product) => {
      total += product.price;
    });
    return total;
  };
  async function handlePaymentIntent() {
    try {
      const result3 = await stripePay.paymentIntents.create({
        amount: 1099,
        currency: "usd",
        payment_method_types: ["card"],
      });
      setclientSec(result3.client_secret);
      console.log("result3", result3);
    } catch (err) {
      console.log("err", err);
    }
  }
  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (elements == null) {
        return;
      }
      const card = elements.getElement("card");
      console.log("card", card);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
      console.log("error, paymentMethod", error, paymentMethod);
    };

    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
    );
  };
  useEffect(() => {
    if (clientSec !== "") {
      const options = {
        clientSecret: `${clientSec}`,
      };
      setStripeOptions(options);
    }
  }, [clientSec]);

  return (
    <div className="p-4">
      <h2 className="text-xl p-4 font-bold mb-4">Cart</h2>
      {products.cart.length === 0 ? (
        <div className="text-gray-500">Your cart is empty.</div>
      ) : (
        <div>
          {products.cart.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-2 bg-white rounded-md shadow-sm px-4 py-2"
            >
              <div className="flex-grow">
                <span className="">{product.title}</span>
              </div>
              <div className="text-gray-700">${product.price}</div>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <span className="font-bold">Total:</span>
            <span className="text-gray-700 ml-2 font-bold">
              ${getTotalAmount()}
            </span>
          </div>
          <button onClick={handlePaymentIntent}>Checkout</button>
          {clientSec && StripeOptions && (
            <Elements stripe={stripePromise} options={StripeOptions}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
