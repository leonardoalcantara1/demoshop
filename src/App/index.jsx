import React from 'react';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';

// Components
import Header from 'app/components/Header';
import UtilArea from 'app/components/UtilArea';
// Routes
import Payment from 'app/pages/Payment';
import { PaymentProvider } from 'app/pages/Payment/context';

import { withContext } from 'app/utils/context';

const App = ({ context }) => {
  const { theme: ctxTheme } = context;
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: ctxTheme.colors.main,
      },
      secondary: {
        main: ctxTheme.colors.secondary,
      },
      success: {
        main: ctxTheme.colors.success,
      },
      warning: {
        main: ctxTheme.colors.warning,
      },
      text: {
        primary: ctxTheme.colors.text,
      },
    },
    typography: {
      htmlFontSize: +(ctxTheme.font.size.replace('px', '')),
      fontFamily: ctxTheme.font.family,
    },
  });

  const GlobalStyle = createGlobalStyle`
    body {
      font-family: ${ctxTheme.font.family};
      background: ${ctxTheme.colors.paper.secondary};
      margin: 0;
      @media (max-width: ${ctxTheme.breakpoints.md - 1}px) {
        background: ${ctxTheme.colors.paper.primary};
      }
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle context={context} />
      <Header />
      <UtilArea>
        <PaymentProvider>
          <Payment />
        </PaymentProvider>
      </UtilArea>
    </ThemeProvider>
  );
};

export default withContext(App);
