import PropTypes from 'prop-types';
import { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';

import useErrors from '../../hooks/useErrors';

import { Form, ButtonContainer } from './style';

import FormGroup from '../FormGroup';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { setError, removeError, getErrorMessageByInputName } = useErrors();

  const handleNameChange = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ input: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ input: 'email', message: 'Email inválido' });
    } else {
      removeError('email');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByInputName('name')}>
        <Input
          error={getErrorMessageByInputName('name')}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByInputName('email')}>
        <Input
          error={getErrorMessageByInputName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Telefone"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="1">Instagram</option>
          <option value="2">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
