import React from 'react';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';
import Header from '../components/header';
export function HeaderContainer({ children, ...props }) {
  return (
    <Header src="valorant.jpg">
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="valorant" />
        <Header.ButtonLink to={props.route}>{props.buttonName}</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}