import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  height: 64px;
  background: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-around;
`;
export const Content = styled.div`
  width: 10%;

  background: #ffffff 0% 0% no-repeat padding-box;

  opacity: 1;
  display: flex;

  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      padding-right: 10px;
    }
  }

  p {
    font-weight: bold;
    color: #7159c1;
  }
  div {
    display: flex;

    align-self: flex-start;
    width: 1px;
    height: 32px;
    border-left: 1px solid #eee;
    margin-left: 25px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 32px;
    height: 32px;

    border-radius: 50%;
  }
`;

export const ContentLinks = styled.div`
  display: flex;

  flex: 1;
  flex-direction: row;
  font: 14px 'Roboto', sans-serif;
  justify-content: space-between;
  div.links {
    align-self: center;
    margin-left: 20px;
  }
  div {
    width: 50px;
    .close {
      text-align: right;
      letter-spacing: 0;
      color: #de3b3b;
      opacity: 1;
      width: 100px;
      font-family: Roboto-Regular;
      border: none;
      background: none;
    }
    p {
      font-family: Roboto-Bold;
      text-align: right;
      letter-spacing: 0;
      color: #666666;
      opacity: 1;
      margin-top: 4px;
    }
  }
  a {
    margin: 15px;
    text-align: left;
    letter-spacing: 0;
    color: #999999;
    opacity: 1;
    font-weight: bold;
  }
`;

export const ContainerAdmin = styled.div`
  display: flex;
  flex-direction: column;
  font: 14px 'Roboto', sans-serif;
  flex: 0.1;
`;
