import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-radius: 16px;
    border: none;
    background: #FFF;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }

`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

    strong {
      font-size: 24px;
    }

    a {
      color: ${({ theme }) => theme.colors.primary.main};
      text-decoration: none;
      font-weight: bold;
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.2s ease-in;

      &:hover {
        background: ${({ theme }) => theme.colors.primary.main};
        color: #FFF;
      }
    }
`;

export const ListHeader = styled.header`
  margin-top: 25px;
  margin-bottom: 10px;

    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        margin-right: 8px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }

      img {
        transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
        transition: transform 0.4s ease-in;
      }
    }
`;
