const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'João Rodrigues',
    emial: 'joao@gmail.com',
    phone: '89826686',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'José Rodrigues',
    emial: 'josé@gmail.com',
    phone: '89826686',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
