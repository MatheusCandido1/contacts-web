import styled from 'styled-components';
import propTypes from 'prop-types';

import magnifierQuestion from '../../assets/images/magnifier-question.svg';

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

export default function SearchNotFoundContainer({ searchTerm }) {
  return (
    <Container>

      <img src={magnifierQuestion} alt="Magnifier Question" />
      <span>
        Nenhum resultado foi encontrado para
        {' '}
        <strong>
          {searchTerm}
        </strong>
      </span>
    </Container>
  );
}

SearchNotFoundContainer.propTypes = {
  searchTerm: propTypes.string.isRequired,
};
