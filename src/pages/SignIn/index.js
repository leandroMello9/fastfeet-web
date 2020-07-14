import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, ContainerInput } from '~/pages/_layouts/auth/styles';
import logo from '~/assets/logoroxo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Ensira um email valido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A senha é obrigatoria'),
});
export default function SignIn() {
  const dispath = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit({ email, password }) {
    dispath(signInRequest(email, password));
  }
  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Container>
          <img src={logo} alt="" width="100" height="50" />
          <p>FASTFEET</p>
        </Container>
        <ContainerInput>
          <p>SEU E-MAIL</p>
          <Input name="email" type="email" placeholder="Seu e-mail" />
        </ContainerInput>
        <ContainerInput>
          <p>SUA SENHA</p>
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />
        </ContainerInput>

        <button type="submit">
          <p>{loading ? 'Carregando...' : 'Entrar no sistema'}</p>
        </button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
