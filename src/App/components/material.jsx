import React, { useState, useEffect } from 'react';
import {
  TextField as MUITextField,
  Button as MUIButton,
} from '@material-ui/core';
import {
  withStyles,
} from '@material-ui/core/styles';
import styled from 'styled-components';
import { withContext } from 'app/utils/context';

export const Button = styled(MUIButton)`
  border-radius: 10px !important;
  font-size: 1em !important;
  letter-spacing: 1px;
  line-height: 1 !important;
  padding: 15px 70px !important;
  &, &:hover {
    box-shadow: none !important;
  }
`;

export const TextField = withContext(({ context, ...inputProps }) => {
  const [Component, setComponent] = useState();

  useEffect(() => {
    setComponent(
      withStyles({
        root: {
          '&': {
            marginTop: 24,
            marginBottom: 16,
          },
          '& .MuiInput-underline:before': {
            borderBottomWidth: 2,
            borderBottomColor: context.theme.colors.text2,
          },
          '& .MuiInputLabel-formControl': {
            fontSize: '1.06em',
          },
          '& .MuiInputLabel-formControl:not(.Mui-focused)': {
            color: context.theme.colors.text2,
          },
          '& .MuiInputBase-input': {
            height: '1.3em',
          },
        },
      })(MUITextField),
    );
  }, [context]);
  return Component ? (
    <Component
      fullWidth
      margin="normal"
      {...inputProps}
    />
  ) : '';
});
