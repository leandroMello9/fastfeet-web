import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { logoutUser } from '~/store/modules/auth/actions';
import { Container, Content, ContentLinks, ContainerAdmin } from './styles';
import logo from '~/assets/logoroxo.svg';

export default function Header() {
  const dispatch = useDispatch();
  function userLogout() {
    dispatch(logoutUser());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <p to="/dashboard">FASTFEET</p>
          <div />
        </nav>
      </Content>
      <ContentLinks>
        <div className="links">
          <Link to="/orders">ENCOMENDAS</Link>
          <Link to="/deliveryman">ENTREGADORES</Link>
          <Link to="/recipient">DESTINATÁRIOS</Link>
          <Link>PROBLEMAS</Link>
        </div>
        <ContainerAdmin>
          <p>Admin FastFeet</p>
          <button className="close" onClick={userLogout}>
            Sair do sistema
          </button>
        </ContainerAdmin>
      </ContentLinks>
    </Container>
  );
}
