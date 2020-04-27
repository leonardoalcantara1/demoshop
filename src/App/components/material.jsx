import React from 'react';
import {
  TextField as MUITextField,
  Button as MUIButton,
} from '@material-ui/core';
import styled from 'styled-components';
import { withContext } from 'app/utils/context';

export const Button = styled(MUIButton)`
  border-radius: 10px;
`;

export const TextField = withContext((props) => {
  const inputProps = { ...props };
  delete inputProps.context;
  return (
    <MUITextField
      fullWidth
      InputLabelProps={{
        style: {
          color: props.context.theme.colors.text2
        }
      }}
      {...inputProps}
    />
  );
};
