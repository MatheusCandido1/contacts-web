import PageHeader from '../../components/PageHeader';

import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  document.title = 'MyContacts - Editar Contato';
  return (
    <>
      <PageHeader
        title="Editar Matheus Cândido"
      />

      <ContactForm
        buttonLabel="Salvar Alterações"
      />
    </>
  );
}
