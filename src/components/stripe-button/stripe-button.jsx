import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HtB6oC5CgRatsQZi34n8TfhJdb0yaBGNc4g9AczjQVq2jgmYijeEk6YOyeLuinoFb38tDcldkj5h4bS4rCIResg00LcYRm0Mo';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label= 'Pay Now'
            name= 'Tk Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;