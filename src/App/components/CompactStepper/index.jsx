import React from 'react';
import { Typography } from '@material-ui/core';

const CompactStepper = ({ step, totalSteps, ...props }) => (
  <Typography {...props}>
    <b>
      Etapa
      {' '}
      {step}
    </b>
    {' '}
    de
    {' '}
    {totalSteps}
  </Typography>
);

export default CompactStepper;
