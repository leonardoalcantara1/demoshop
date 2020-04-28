// Exclusive form to payment page. Is not a common component
import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  TextField,
  Button,
} from 'app/components/material';
import { withPaymentCtx } from './context';
import { FormContainer } from './style';

const formatMoney = (value = 0) => value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const Form = ({ paymentCtx }) => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer onSubmit={submit}>
      <TextField
        label="Número do Cartão"
        onFocus={() => paymentCtx.methods.toggleVerse(false)}
      />
      <TextField
        label="Nome (igual ao cartão)"
        onFocus={() => paymentCtx.methods.toggleVerse(false)}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Validade"
            onFocus={() => paymentCtx.methods.toggleVerse(true)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="CVV"
            onFocus={() => paymentCtx.methods.toggleVerse(true)}
          />
        </Grid>
      </Grid>
      <TextField
        label="Número de Parcelas"
        select
        SelectProps={{
          native: true,
        }}
      >
        {
          ([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
          ]).map(item => (
            <option value={item} key={item}>
              {`${item}x`}
              {' '}
              de
              {' '}
              {formatMoney(paymentCtx.state.value / item)}
              {' '}
              sem juros
            </option>
          ))
        }
      </TextField>
      <Button color="primary" variant="contained" className="submit">
        CONTINUAR
      </Button>
    </FormContainer>
  );
};

export default withPaymentCtx(Form);
