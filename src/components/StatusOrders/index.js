import React from 'react';
import { Container } from './styles';

export default function StatusOrders({ label, type }) {
  return (
    <Container type={type}>
      <div />
      <p>{label || null}</p>
    </Container>
  );
}
