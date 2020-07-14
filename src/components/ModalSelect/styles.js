import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 120px;
  position: absolute;
  top: 311px;
  left: 1000px;
  border-radius: 4px;
  padding: 15px 5px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -10px;
    height: 0;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffffff 0% 0% no-repeat padding-box;
  }
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #00000026;
  opacity: 1;
  div {
    display: flex;
    align-items: center;
    margin-left: 4px;
    margin-top: 8px;
    p {
      margin-left: 5px;
    }
    button {
      display: flex;
      width: 200px;
      background: none;
      border: none;
    }
  }
  .sub-container {
    display: block;
    span {
      display: block;

      background: #00000026;
      width: 130px;
      height: 1px;
    }
    button {
      display: flex;
      width: 200px;
      background: none;
      border: none;
      align-items: center;
      margin-bottom: 3px;
    }
  }
`;
