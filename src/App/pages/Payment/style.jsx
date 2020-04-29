import React from 'react';
import styled from 'styled-components';
import {
  Grid,
} from '@material-ui/core';
import { Wrapper } from 'app/components/UtilArea/style';
import { withContext } from 'app/utils/context';

export const Container = styled(Wrapper)`
  align-self: center;
`;

export const CartArea = withContext(
  styled.div`
    padding: 8px;
    background: ${({ context }) => context.theme.colors.paper.primary};
  `,
);

const GridContainer = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <Grid {...props} container>{props.children}</Grid>
);

const GridItem = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <Grid {...props} item>{props.children}</Grid>
);

export const CheckoutArea = withContext(
  styled(GridContainer)`
    background: ${({ context }) => context.theme.colors.paper.primary};
    align-items: stretch;
    justify-content: space-between;

    .back {
      box-shadow: none;
      text-transform: none;
      padding-left: 0;
      padding-right: 0;
      &:hover {
        box-shadow: none;
        background: none;
      }
    }

    .title {
      margin-top: 42px;
      margin-bottom: 26px;
      h6 {
        line-height: 1.4em;
      }
    }
  `,
);

export const LeftSide = withContext(
  styled(GridItem)`
    background: ${({ context }) => context.theme.colors.main};
    color: ${({ context }) => context.theme.colors.paper.primary};
    padding: 50px 0 50px 64px;
  `,
);

export const FormContainer = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .submit {
    margin-top: 60px;
  }
  .MuiFormLabel-root {
    z-index: 10;
    cursor: text;
    .cvv-label {
      display: inline-flex;
      align-items: center;
      height: 15px;
      svg {
        width: 13px;
        margin-left: 4px;
        cursor: pointer;
      }
    }
  }
`;
