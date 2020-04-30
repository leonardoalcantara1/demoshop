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
import Stepper from 'app/components/Stepper';
import Breakpoint from 'app/components/Breakpoint';
import CompactStepper from 'app/components/CompactStepper';
import {
  Container,
  CheckoutArea,
  LeftSide,
  CartArea,
  RightSide,
  BackButton,
} from './style';
import Form from './Form';
import { withPaymentCtx } from './context';
import paymentIcon from './paymentIcon.svg';

const Payment = ({ paymentCtx }) => (
  <Container>
    <Grid container spacing={2} className="payment-grid-container">
      <Grid item lg={9} md={12} xs={12} className="checkout-container">
        <CheckoutArea>
          <LeftSide lg={4}>
            <Breakpoint sm>
              <BackButton>
                <ArrowLeft />
              </BackButton>
            </Breakpoint>
            <Breakpoint md lg>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ArrowLeft />}
                className="back"
              >
                Alterar forma de pagamento
              </Button>
            </Breakpoint>
            <Breakpoint sm>
              <CompactStepper variant="body2" step={2} totalSteps={3} />
            </Breakpoint>
            <Grid container spacing={1} className="title">
              <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                <img src={paymentIcon} alt="" />
              </Grid>
              <Grid item xs className="text">
                <Typography variant="h6">
                  <b>Adicione um novo cartão de crédito</b>
                </Typography>
              </Grid>
            </Grid>
            <CCard
              verse={paymentCtx.state.verse}
              name={paymentCtx.state.ccardName}
              number={paymentCtx.state.ccardNumber}
              expires={paymentCtx.state.ccardExpires}
              cvv={paymentCtx.state.ccardCVV}
              brand={paymentCtx.state.ccardBrand}
            />
          </LeftSide>
          <Breakpoint lg md>
            <Grid item md={1}>
              &nbsp;
            </Grid>
          </Breakpoint>
          <RightSide
            lg={6}
            md
          >
            <Breakpoint lg md>
              <Stepper step={1} />
            </Breakpoint>
            <Form />
          </RightSide>
        </CheckoutArea>
      </Grid>
      <Breakpoint lg>
        <Grid item lg={3}>
          <CartArea />
        </Grid>
      </Breakpoint>
    </Grid>
  </Container>
);

export default withPaymentCtx(Payment);
