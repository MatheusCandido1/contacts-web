import styled from 'styled-components';
import propTypes from 'prop-types';
import Button from '../Button';

import sad from '../../assets/images/sad.svg';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export default function ErrorContainer({ onTryAgainButtonClick }) {
  return (
    <Container>
      <img src={sad} alt="Sad" />

      <div className="details">

        <strong>Ocorreu um erro ao exibir os seus contatos</strong>
        <Button onClick={onTryAgainButtonClick} type="button">
          Tentar Novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorContainer.propTypes = {
  onTryAgainButtonClick: propTypes.node.isRequired,
};
