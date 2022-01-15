import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://192.168.0.181:3333');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/089ee90c-75aa-11ec-be3a-e4a8dff58e7d?orderBy=${orderBy}`);
  }

  async getContact(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  async createContact(contact) {
    return this.httpClient.post('/contact', contact);
  }
}

export default new ContactsService();
