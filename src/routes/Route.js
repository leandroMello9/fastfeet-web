import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { Container } from './styles';
import AuthLayout from '~/pages/_layouts/auth/auth';
import DefaultLayout from '~/pages/_layouts/default/default';
import { store } from '~/store';

export default function RouterWrapper({
  component: Component,
  isPrivet = false,
  ...rest
}) {
  const { signed } = store.getState().auth;
  console.log(isPrivet, signed);
  console.log(Component);

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
}
