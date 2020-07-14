import React, { useState, useMemo, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import api from '~/services/api';
import { Container, InputContainer, Grid, listDeliveryman } from './styles';
import Modal from '../../components/ModalSelect';

export default function Recipient() {
  const [recipients, setRecipients] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients');
      setRecipients(response.data);
    }
    loadRecipients();
  }, []);
  function handleModalSubtmit() {
    setModalVisible(!modalVisible);
  }
  console.log('Deliveryman', recipients);
  return (
    <Container>
      <h1>Gerenciando entregadores</h1>

      <InputContainer>
        <div className="input-container">
          <FaSearch size={20} color="#999999" />
          <input type="text" placeholder="Buscar por destinatario" />
        </div>

        <button type="submit" className="button-add">
          <MdAdd size={22} color="#fff" />
          CRADASTRAR
        </button>
      </InputContainer>
      <Grid>
        <div>
          <p>ID</p>

          <p>Nome</p>
          <p>Endereço</p>
        </div>

        <p>Acões</p>
      </Grid>
      {recipients.map(recipient => (
        <listDeliveryman>
          <ul>
            <li key={recipient.id}>#0{recipient.id}</li>

            <li style={{ marginLeft: 35 }}>{recipient.name}</li>
            <li>{recipient.city}</li>

            <button
              className="modal-button"
              type="submit"
              onClick={() => handleModalSubtmit()}
            >
              <MdMoreHoriz size={22} color="#C6C6C6" />
            </button>
            {modalVisible ? <Modal type="deliveryman" /> : null}
          </ul>
        </listDeliveryman>
      ))}
    </Container>
  );
}
