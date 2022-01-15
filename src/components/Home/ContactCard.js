import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import formatPhone from '../../utils/formatPhone';

import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';

export const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-info{
      display: flex;
      align-items: center;

      small {
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export default function ContactCard({ contact }) {
  return (
    <Container>
      <div className="info">
        <div className="contact-info">
          <strong>{contact.name}</strong>
          {contact.category?.name && <small>{contact.category.name}</small>}
        </div>
        <span>{contact.email}</span>
        <span>{formatPhone(contact.phone)}</span>
      </div>

      <div className="actions">
        <Link to={`/edit/${contact.id}`}>
          <img src={edit} alt="Edit" />
        </Link>
        <button type="button">
          <img src={trash} alt="Trash" />
        </button>
      </div>
    </Container>
  );
}

ContactCard.propTypes = {
  contact: propTypes.objectOf(propTypes.object).isRequired,
};
