import styled from 'styled-components';

export const Container = styled.div`
  font-size: 24px;
  font: 14px 'Roboto-Bold', sans-serif;
  display: flex;
  margin: 50px;

  flex-direction: column;
  input {
    width: 151px;
    height: 19px;
  }
  header {
    display: flex;
    align-self: center;
    align-items: center;
    button {
      border: 0;
      background: none;
    }
    strong {
      color: #fff;
      font-size: 24px;
    }
  }
`;
export const InputContainer = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
  flex: 1;
  .button-add {
    width: 142px;
    height: 36px;
    background: #7d40e7 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    border: none;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #ffffff;
    button {
      background: #7d40e7 0% 0% no-repeat padding-box;

      border: none;
      color: #ffffff;
    }
  }

  .input-container {
    width: 237px;
    height: 36px;
    background: #ffffff 0% 0% no-repeat padding-box;
    align-items: center;
    display: flex;
    input {
      opacity: 1;
      margin-left: 15px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: none;
      &::placeholder {
        color: #999999;
      }
    }
  }
`;
export const Grid = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  width: 1050px;
  flex-direction: row;
  div {
    display: flex;
    width: 500px;
    justify-content: space-between;
  }

  p {
    font: 16px 'Roboto-Bold', sans-serif;
  }
`;

export const listDeliveryman = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 1050px;
  height: 57px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  padding-right: 20px;

  ul {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
  li {
    display: flex;
    align-items: center;
    width: 100px;

    font: 16px 'Roboto-Bold', sans-serif;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
  }
  .modal-button {
    background: none;
    border: none;
    margin-left: 90px;
  }
`;
