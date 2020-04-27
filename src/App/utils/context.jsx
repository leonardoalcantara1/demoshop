import React, { createContext, useState } from 'react';

const AppContext = createContext('app');

const lightTheme = {
  colors: {
    paper: {
      primary: '#FFFFFF',
      secondary: '#F7F7F7',
    },
    main: '#DE4B4B',
    secondary: '#EB5757',
    success: '#75B812',
    warning: '#F6BB1D',
    text: '#3C3C3C',
    text2: '#C9C9C9',
  },
  font: {
    family: 'Verdana, sans-serif',
    size: '17px',
  },
  dimensions: {
    headerHeight: '90px',
    utilArea: '1366px',
  },
};

export const AppProvider = ({ children }) => {
  const [theme] = useState(lightTheme);
  return (
    <AppContext.Provider
      value={{ theme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const withContext = (Component) => (props) => (
  <AppContext.Consumer>
    {state => <Component {...props} context={state} />}
  </AppContext.Consumer>
);
