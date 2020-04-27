import React from 'react';
import {
  HeaderComponent,
} from './style';
import {
  Wrapper,
} from '../UtilArea/style';
import logo from './logo.svg';

const Header = (props) => (
  <HeaderComponent {...props}>
    <Wrapper>
      <img src={logo} alt="Demoshop Brand" />
    </Wrapper>
  </HeaderComponent>
);

export default Header;
