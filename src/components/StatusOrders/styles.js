import styled from 'styled-components';

const objStyle = {
  Entregue: '#DFF0DF',
  Pendente: '#F0F0DF',
  Retirada: '#BAD2FF',
  Cancelada: '#FAB0B0',
};
const objStyleFont = {
  Entregue: '#2CA42B',
  Pendente: '#C1BC35',
  Retirada: '#4D85EE',
  Cancelada: '#DE3B3B',
};

export const Container = styled.div`
  width: 99px;
  display: flex;
  height: 25px;
  opacity: 1;
  border-radius: 12px;
  opacity: 1;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
  background: ${props => (props.type ? objStyle[props.type] : '#2CA42B')};
  p {
    color: ${props => (props.type ? objStyleFont[props.type] : '#2CA42B')};
  }
  div {
    width: 15px;
    height: 15px;
    border-radius: 12.5px;
    margin-right: 8px;
    background: ${props => (props.type ? objStyleFont[props.type] : '#2CA42B')};
  }
`;
