import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 75px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputSearchContainer = styled.div`
  margin-top: 50px;
  width: 100%;

  input {
    width: 100%;
    border-radius: 25px;
    border: none;
    background: #FFF;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    outline: 0;
    padding: 0 16px;
  }

  &::placeholder {
    color: #BCBCBC;
  }
`;
