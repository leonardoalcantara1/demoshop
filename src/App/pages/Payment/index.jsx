import React from 'react';
import {
  Grid,
  Button,
  Typography,
} from '@material-ui/core';
import {
  KeyboardArrowLeft as ArrowLeft,
} from '@material-ui/icons';
import CCard from 'app/components/CCard';
import {
  Container,
  CheckoutArea,
  LeftSide,
  CartArea,
} from './style';
import Form from './Form';
import { withPaymentCtx } from './context';
import paymentIcon from './paymentIcon.svg';

const Payment = ({ paymentCtx }) => (
  <Container>
    <Grid container spacing={2}>
      <Grid item lg={9}>
        <CheckoutArea>
          <LeftSide lg={4}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowLeft />}
              className="back"
            >
              Alterar forma de pagamento
            </Button>
            <Grid container spacing={1} className="title">
              <Grid item>
                <img src={paymentIcon} alt="" />
              </Grid>
              <Grid item xs>
                <Typography variant="h6">
                  <b>Adicione um novo cartão de crédito</b>
                </Typography>
              </Grid>
            </Grid>
            <CCard verse={paymentCtx.state.verse} />
          </LeftSide>
          <Grid item lg={6}>
            <Form />
          </Grid>
        </CheckoutArea>
      </Grid>
      <Grid item lg={3}>
        <CartArea />
      </Grid>
    </Grid>
  </Container>
);

export default withPaymentCtx(Payment);
