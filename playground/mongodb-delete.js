//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongDB server');

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Anthony'}).then((result) => {
  //   console.log(result);
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5af5742d91a9d31e5789c577') }).then((result) => {
    console.log(result);
  })

  //db.close();
});
