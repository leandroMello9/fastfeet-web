import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 225px;
    left: 540px;
    width: 360px;
    height: 425px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #00000033;
    border-radius: 4px;
    opacity: 1;

    input {
      top: 397px;
      left: 570px;
      width: 300px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      margin-bottom: 6%;

      &::placeholder {
        top: 409px;
        left: 585px;
        width: 150px;
        height: 21px;
        color: 'black';
        text-align: left;

        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }
  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    top: 545px;
    left: 570px;
    width: 300px;
    height: 45px;
    background: #7d40e7 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    p {
      color: #fff;
    }
    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  height: 120px;
  width: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  p {
    font-family: Helvetica;
    top: 293px;
    left: 669px;
    width: 181px;
    height: 33px;
    text-align: left;
    font: Bold Oblique 33px/40px Helvetica;
    letter-spacing: 1.1px;
    color: #7d40e7;
    opacity: 1;
  }
  img {
    top: 285px;
    left: 591px;
    width: 35px;
    height: 44px;
    /* background: #7d40e7 0% 0% no-repeat padding-box; */
    opacity: 1;
  }
`;

export const ContainerInput = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  display: flex;
  flex-direction: column;
  flex: 0.1;

  p {
    align-self: flex-start;
    margin-bottom: 6px;
    font-family: Roboto;
    font-weight: bold;
    color: #444444;
    letter-spacing: 0;
    margin-right: 30px;
  }
`;
