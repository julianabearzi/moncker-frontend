import React from 'react';
import ReactDOM from 'react-dom';
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

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
        alert('Suscripcion actualizada')
        return actions.order.capture();
      }

    return (
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />)
}

