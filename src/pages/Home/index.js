import { Link } from 'react-router-dom';

import React, {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
} from './styles';

import Button from '../../components/Button';

import formatPhone from '../../utils/formatPhone';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';
import sad from '../../assets/images/sad.svg';

import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('asc');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const getContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const handleToggleOrderBy = () => {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  };

  const handleTryAgain = () => {
    getContacts();
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          type="text"
          value={searchTerm}
          placeholder="Pesquise contato.."
          onChange={handleSearchTermChange}
        />
      </InputSearchContainer>

      <Header hasError={hasError}>
        {!hasError && (
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        )}
        <Link to="/create">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />

          <div className="details">

            <strong>Ocorreu um erro ao exibir os seus contatos</strong>
            <Button onClick={handleTryAgain} type="button">
              Tentar Novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="Arrow" />
            </button>
          </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
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
            </Card>
          ))}
        </>
      )}

    </Container>
  );
}
