import React, { createContext, useState, useEffect } from 'react';
import { cardType } from '@polvo-labs/card-type';

const PaymentCtx = createContext('paymentCtx');

const initialState = {
  value: 12000,
};

export const PaymentProvider = ({ children }) => {
  const [verse, toggleVerse] = useState(false);
  const [ccardName, setCCardName] = useState('');
  const [ccardNumber, setCCardNumber] = useState('');
  const [ccardExpires, setCCardExpires] = useState('');
  const [ccardCVV, setCCardCVV] = useState('');
  const [ccardBrand, setCCardBrand] = useState();
  const [installments, setInstallments] = useState(1);

  useEffect(() => {
    const number = ccardNumber.replace(/\D/g, '');
    if (number.length >= 4) {
      setCCardBrand(cardType(number));
    } else {
      setCCardBrand(null);
    }
  }, [ccardNumber]);
  return (
    <PaymentCtx.Provider
      value={{
        state: {
          ...initialState,
          ccardName,
          ccardNumber,
          ccardExpires,
          ccardCVV,
          verse,
          ccardBrand,
          installments,
        },
        methods: {
          toggleVerse,
          setCCardName,
          setCCardNumber,
          setCCardExpires,
          setCCardCVV,
          setInstallments,
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
