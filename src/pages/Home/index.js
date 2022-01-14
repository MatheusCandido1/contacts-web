import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import {
  Container, InputSearchContainer, Header, ListHeader, Card,
} from './styles';

import formatPhone from '../../utils/formatPhone';
import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';
// import Modal from '../../components/Modal';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('asc');

  const filteredContacts = contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  useEffect(() => {
    fetch(`http://localhost:3333/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const res = await response.json();
        setContacts(res);
      })
      .catch((error) => {
        console.log('erro', error);
      });
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      {/* <Modal danger /> */}
      <InputSearchContainer>
        <input
          type="text"
          value={searchTerm}
          placeholder="Pesquise contato.."
          onChange={handleSearchTermChange}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contatos' : ' contato'}
        </strong>
        <Link to="/create">Novo Contato</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </ListHeader>

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-info">
              <strong>{contact.name}</strong>
              {contact.category.name && <small>{contact.category.name}</small>}
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
    </Container>
  );
}
