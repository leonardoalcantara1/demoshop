import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  KeyboardArrowRight as ArrowRight,
  CheckCircle,
} from '@material-ui/icons';
import { withContext } from 'app/utils/context';
import { Step } from './style';

const Stepper = ({ context, step }) => {
  const { theme } = context;
  return (
    <Grid
      container
      spacing={2}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.main,
        padding: '4px 0',
      }}
    >
      <Grid item>
        <Step variant="body2">
          {
            step < 1
              ? (
                <span className="circle">1</span>
              )
              : (
                <CheckCircle />
              )
          }
          Carrinho
        </Step>
      </Grid>
      <Grid item style={{ fontSize: 0 }}>
        <ArrowRight />
      </Grid>
      <Grid item>
        <Step variant="body2">
          {
            step < 2
              ? (
                <span className="circle">2</span>
              )
              : (
                <CheckCircle />
              )
          }
          Pagamento
        </Step>
      </Grid>
      <Grid item style={{ fontSize: 0 }}>
        <ArrowRight />
      </Grid>
      <Grid item>
        <Step variant="body2">
          {
            step < 3
              ? (
                <span className="circle">3</span>
              )
              : (
                <CheckCircle />
              )
          }
          Confirmação
        </Step>
      </Grid>
    </Grid>
  );
};

export default withContext(Stepper);
