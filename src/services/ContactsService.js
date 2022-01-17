import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('https://mycontacts-server.herokuapp.com/api/v1');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async getContact(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  async createContact(contact) {
    return this.httpClient.post('/contact', contact);
  }
}

export default new ContactsService();
