import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const Header = styled.div`
  strong {
    font-size: 24px;
    color: #222222;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
  }
`;
