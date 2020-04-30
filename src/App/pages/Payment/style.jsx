import React from 'react';
import styled from 'styled-components';
import {
  Grid,
  IconButton,
} from '@material-ui/core';
import { Wrapper } from 'app/components/UtilArea/style';
import { withContext } from 'app/utils/context';

export const Container = withContext(
  styled(Wrapper)`
    align-self: center;
    @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
      .payment-grid-container {
        margin: 0 !important;
        width: 100%;
      }
      &, .checkout-container {
        padding: 0 !important;
      }
    }
  `,
);

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
      @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
        margin-top: 30px;
        margin-bottom: 16px;
        width: 220px;
      }
      img {
        display: block;
        @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
          width: 40px;
          height: 40px;
        }
      }
      .text {
        display: flex;
        align-items: center;
        h6 {
          line-height: 1.4em;
          @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
            font-size: 1em;
            line-height: 1.2em;
          }
        }
      }
    }

    @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
      flex-direction: column;
    }
  `,
);

export const LeftSide = withContext(
  styled(GridItem)`
    background: ${({ context }) => context.theme.colors.main};
    color: ${({ context }) => context.theme.colors.paper.primary};
    padding: 50px 0 50px 64px;
    max-width: 325px;
    @media (max-width: ${({ context }) => context.theme.breakpoints.lg - 1}px) {
      padding-left: 36px;
    }
    @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
      max-width: initial;
      width: 100%;
      height: 240px;
      padding: 38px 40px 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-bottom: 80px !important;

      .ccard-component {
        position: absolute;
        bottom: -90px;
      }
    }
  `,
);

export const BackButton = withContext(
  styled(IconButton)`
    position: absolute !important;
    top: 18px;
    left: 10px;
    color: ${({ context }) => context.theme.colors.paper.primary} !important;
    svg {
      width: 34px;
      height: 34px;
    }
  `,
);

export const RightSide = withContext(
  styled(GridItem)`
    padding: 50px 64px 50px 0;
    @media (max-width: ${({ context }) => context.theme.breakpoints.lg - 1}px) {
      padding-right: 36px;
    }
    @media (max-width: ${({ context }) => context.theme.breakpoints.lg - 1}px) {
      padding: 0 40px;
    }
  `,
);

export const FormContainer = withContext(
  styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: ${({ context }) => context.theme.breakpoints.lg - 1}px) {
      padding-left: 24px;
    }
    @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
      margin-top: 16px;
      padding-left: 0;
    }
    .submit {
      margin-top: 60px;
      @media (max-width: ${({ context }) => context.theme.breakpoints.md - 1}px) {
        width: 100%;
        margin-top: 24px;
        margin-bottom: 24px;
      }
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
  `,
);
