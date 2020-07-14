import React from 'react';

import { MdRemoveRedEye, MdEdit, MdRestore } from 'react-icons/md';
import { Container } from './styles';

export default function ModalSelect({ type }) {
  return (
    <Container>
      {type === 'deliveryman' ? null : (
        <div className="sub-container">
          <div>
            <button>
              <MdRemoveRedEye color="#8E5BE8" />
              <p>Visualizar</p>
            </button>
          </div>
          <span />
        </div>
      )}

      <div className="sub-container">
        <div>
          <button>
            <MdEdit color="#4D85EE" />
            <p>Editar</p>
          </button>
        </div>
        <span />
      </div>

      <div>
        <button>
          <MdRestore color="#DE3B3B" />
          <p>Excluir</p>
        </button>
      </div>
    </Container>
  );
}
