import React from 'react';
import ReactDOM from 'react-dom';
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
import swal from 'sweetalert';


export default function App() {
    const createOrder = (data, actions)  => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "9.99",
              },
            },
          ],
        });
      }

      const onApprove = (data, actions) => {
        swal({
            title: "Good job!",
            text: "Your suscription in Moncker App is renewed!",
            icon: "success",
            button: "Aww yiss!",
          });
        return actions.order.capture();
      }

    return (
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />)
}

