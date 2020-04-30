/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// Exclusive form to payment page. Is not a common component
import React, { useState } from 'react';
import {
  Grid,
  Tooltip,
} from '@material-ui/core';
import {
  Info,
} from '@material-ui/icons';
import {
  Alert,
  AlertTitle,
} from '@material-ui/lab';
import { maskJs } from 'mask-js';
import {
  TextField,
  Button,
} from 'app/components/material';
import { withPaymentCtx } from './context';
import { FormContainer } from './style';
import { payWithCCard } from './services';

const formatMoney = (value = 0) => value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const cvvRef = React.createRef();

const Form = ({ paymentCtx }) => {
  const [numberError, setNumberError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [expiresError, setExpiresError] = useState(false);
  const [cvvError, setCVVError] = useState(false);
  const [requestError, setRequestError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setRequestError(null);
    setNumberError(false);
    setNameError(false);
    setExpiresError(false);
    setCVVError(false);
    const {
      ccardNumber,
      ccardName,
      ccardExpires,
      ccardCVV,
      ccardBrand,
      installments,
    } = paymentCtx.state;

    let error = false;

    if (!ccardBrand) {
      error = true;
      setNumberError(true);
    }

    if (!ccardName.match(/^[\w]{2,30}\s[\w]/)) {
      error = true;
      setNameError(true);
    }

    if (!(
      // eslint-disable-next-line no-restricted-globals
      ccardExpires.length === 5 && !isNaN(new Date(`${ccardExpires.split('/')[0]}/01/${ccardExpires.split('/')[1]}`))
    )) {
      error = true;
      setExpiresError(true);
    }

    if (ccardCVV.length < 3) {
      error = true;
      setCVVError(true);
    }

    if (!error) {
      const data = {
        ccardNumber,
        ccardName,
        ccardExpires,
        ccardCVV,
        installments,
      };

      try {
        await payWithCCard(data);
        setRequestError(false);
      } catch (err) {
        setRequestError(err.message);
      }
    }
  };
  return (
    <FormContainer onSubmit={submit}>
      <TextField
        error={numberError}
        helperText={numberError && 'Número de cartão inválido'}
        label="Número do Cartão"
        onFocus={() => paymentCtx.methods.toggleVerse(false)}
        onChange={(e) => paymentCtx.methods.setCCardNumber(maskJs('9999 9999 9999 9999', e.target.value))}
        value={paymentCtx.state.ccardNumber}
        type="tel"
        inputProps={{
          autoFocus: true,
        }}
      />
      <TextField
        error={nameError}
        helperText={nameError && 'Insira seu nome completo'}
        label="Nome (igual ao cartão)"
        value={paymentCtx.state.ccardName}
        onChange={(e) => paymentCtx.methods.setCCardName(e.target.value.toUpperCase())}
        onFocus={() => paymentCtx.methods.toggleVerse(false)}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            error={expiresError}
            helperText={expiresError && 'Data inválida'}
            label="Validade"
            onFocus={() => paymentCtx.methods.toggleVerse(false)}
            onChange={(e) => paymentCtx.methods.setCCardExpires(maskJs('99/99', e.target.value))}
            value={paymentCtx.state.ccardExpires}
            type="tel"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={cvvError}
            helperText={cvvError && 'Código inválido'}
            label={(
              <span className="cvv-label" onClick={() => cvvRef.current.focus()}>
                <span className="text">
                  CVV
                </span>
                <Tooltip title="3 dígitos atrás do cartão" placement="top">
                  <Info />
                </Tooltip>
              </span>
            )}
            onFocus={() => paymentCtx.methods.toggleVerse(true)}
            onChange={(e) => paymentCtx.methods.setCCardCVV(maskJs('999', e.target.value))}
            value={paymentCtx.state.ccardCVV}
            inputProps={{
              ref: cvvRef,
            }}
            type="tel"
          />
        </Grid>
      </Grid>
      <TextField
        label="Número de Parcelas"
        select
        SelectProps={{
          native: true,
        }}
        value={paymentCtx.state.installments}
        onChange={(e) => paymentCtx.methods.setInstallments(+e.target.value)}
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
      {
        requestError && (
          <Alert severity="error" style={{ width: '100%', boxSizing: 'border-box' }}>
            <AlertTitle>Erro no pagamento</AlertTitle>
            {requestError}
          </Alert>
        )
      }
      {
        requestError === false && (
          <Alert severity="success" style={{ width: '100%', boxSizing: 'border-box' }}>
            <AlertTitle>Sucesso!</AlertTitle>
            O pagamento foi efetuado e em breve receberá a confirmação em seu e-mail
          </Alert>
        )
      }
      <Button color="primary" variant="contained" className="submit" type="submit">
        CONTINUAR
      </Button>
    </FormContainer>
  );
};

export default withPaymentCtx(Form);
