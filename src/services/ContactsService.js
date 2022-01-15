import delay from '../utils/delay';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(`http://192.168.0.181:3333/contacts?orderBy=${orderBy}`);
    await delay(500);
    return response.json();
  }
}

export default new ContactsService();
