import Dexie from 'dexie';

const db = new Dexie('myDb');
db.version(1).stores({
    friends: `id, name, festival, phone, notes, lowercaseName`
});

export default db;