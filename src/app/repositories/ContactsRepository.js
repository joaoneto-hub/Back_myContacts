const db = require('../../database');

class ContactsRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  // delete(id) {
  //   return new Promise((resolve) => {
  //     contacts = contacts.filter((contact) => contact.id !== id);
  //     resolve();
  //   });
  // }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  // update(id, {
  //   name, email, phone, category_id,
  // }) {
  //   return new Promise((resolve) => {
  //     const updateContact = {
  //       id,
  //       name,
  //       email,
  //       phone,
  //       category_id,
  //     };

  //     contacts = contacts.map((contact) => (
  //       contact.id === id ? updateContact : contact
  //     ));
  //     resolve(updateContact);
  //   });
   }
}

module.exports = new ContactsRepository();
