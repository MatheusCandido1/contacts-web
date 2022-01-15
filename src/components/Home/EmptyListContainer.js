import styled from 'styled-components';

import emptyBox from '../../assets/images/empty-box.svg';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-left: 24px;
    word-break: break-word;
    align-self: center;
  }
`;

export default function EmptyListContainer() {
  return (
    <Container>
      <img src={emptyBox} alt="Empty Box" />
      <p>
        Você ainda não tem nenhum contato cadastrado!
        Clique no botão
        {' '}
        <strong>”Novo contato”</strong>
        {' '}
        à cima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
