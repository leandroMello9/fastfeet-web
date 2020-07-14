import React, { useState, useMemo, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import api from '~/services/api';
import { Container, InputContainer, Grid, ListOrders } from './styles';
import Modal from '../../components/ModalSelect';
import StatusOrder from '../../components/StatusOrders';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders');
      setOrders(response.data);
    }
    loadOrders();
  }, []);
  function handleModalSubtmit() {
    setModalVisible(!modalVisible);
  }
  return (
    <Container>
      <h1>Gerenciando encomendas</h1>

      <InputContainer>
        <div className="input-container">
          <FaSearch size={20} color="#999999" />
          <input type="text" placeholder="Buscar por encomenda" />
        </div>

        <button type="submit" className="button-add">
          <MdAdd size={22} color="#fff" />
          CRADASTRAR
        </button>
      </InputContainer>
      <Grid>
        <p>ID</p>
        <p>Destinatrio</p>
        <p>Entregador</p>
        <p>Cidade</p>
        <p>Estado</p>
        <p>Status</p>
        <p>Acões</p>
      </Grid>
      {orders.map(ord => (
        <ListOrders>
          <ul key={ord.id}>
            <li>#0{ord.id}</li>
            <li>{ord.recipient.name}</li>
            <li>
              <img src={ord.signature.url} />
              <p>{ord.deliveryman.name}</p>
            </li>
            <li>{ord.recipient.city}</li>
            <li>{ord.recipient.state}</li>
            <StatusOrder type={ord.status} label={ord.status} />
            <button
              className="modal-button"
              type="submit"
              onClick={() => handleModalSubtmit()}
            >
              <MdMoreHoriz size={22} color="#C6C6C6" />
            </button>
            {modalVisible ? <Modal /> : null}
          </ul>
        </ListOrders>
      ))}
    </Container>
  );
}
