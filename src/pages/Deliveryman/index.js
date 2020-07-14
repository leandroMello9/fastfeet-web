import React, { useState, useMemo, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import api from '~/services/api';
import { Container, InputContainer, Grid, ListDeliveryman } from './styles';
import Modal from '../../components/ModalSelect';

export default function Deliveryman() {
  const [deliveryman, setDeliveryman] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get('/deliveryman');
      setDeliveryman(response.data);
    }
    loadDeliveryman();
  }, []);
  function handleModalSubtmit() {
    setModalVisible(!modalVisible);
  }
  console.log('Deliveryman', deliveryman);
  return (
    <Container>
      <h1>Gerenciando entregadores</h1>

      <InputContainer>
        <div className="input-container">
          <FaSearch size={20} color="#999999" />
          <input type="text" placeholder="Buscar por entregador" />
        </div>

        <button type="submit" className="button-add">
          <MdAdd size={22} color="#fff" />
          CRADASTRAR
        </button>
      </InputContainer>
      <Grid>
        <p>ID</p>
        <p>Foto</p>
        <p>Nome</p>
        <p>Email</p>

        <p>Acões</p>
      </Grid>
      {deliveryman.map(delivery => (
        <ListDeliveryman>
          <ul>
            <li key={delivery.id}>#0{delivery.id}</li>
            <li>
              <img src={delivery.avatar.url} />
            </li>
            <li style={{ marginLeft: 35 }}>{delivery.name}</li>
            <li>{delivery.email}</li>

            <button
              className="modal-button"
              type="submit"
              onClick={() => handleModalSubtmit()}
            >
              <MdMoreHoriz size={22} color="#C6C6C6" />
            </button>
            {modalVisible ? <Modal type="deliveryman" /> : null}
          </ul>
        </ListDeliveryman>
      ))}
    </Container>
  );
}
