import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';
import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Loader />
      {/* <Modal danger /> */}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise contato.." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/create">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-info">
              <strong>Matheus Cândido</strong>
              <small>instagram</small>
            </div>
            <span>matheus@email.com</span>
            <span>(31) 998725-2520</span>
          </div>

          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
