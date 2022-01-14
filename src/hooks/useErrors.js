import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ input, message }) {
    const errorExists = errors.find((error) => error.input === input);

    if (errorExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { input, message },
    ]);
  }

  function removeError(inputName) {
    setErrors((prevState) => prevState.filter(
      (error) => error.input !== inputName,
    ));
  }

  function getErrorMessageByInputName(inputName) {
    return errors.find((error) => error.input === inputName)?.message;
  }

  return {
    setError,
    removeError,
    getErrorMessageByInputName,
    errors,
  };
}
