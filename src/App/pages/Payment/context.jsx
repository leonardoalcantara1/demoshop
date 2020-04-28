import React, { createContext, useState } from 'react';

const PaymentCtx = createContext('paymentCtx');

const initialState = {
  value: 12000,
};

export const PaymentProvider = ({ children }) => {
  const [verse, toggleVerse] = useState(false);
  return (
    <PaymentCtx.Provider
      value={{
        state: {
          ...initialState,
          verse,
        },
        methods: {
          toggleVerse,
        },
      }}
    >
      {children}
    </PaymentCtx.Provider>
  );
};

export const withPaymentCtx = (Component) => (props) => (
  <PaymentCtx.Consumer>
    {state => <Component {...props} paymentCtx={state} />}
  </PaymentCtx.Consumer>
);
