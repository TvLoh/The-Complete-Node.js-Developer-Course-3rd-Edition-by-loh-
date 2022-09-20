// CRUD create read update delete delete

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log(error)
  }

  const db = client.db(databaseName)
/* 
  db.collection('users').findOne({_id: new ObjectId('6329a24b5986f93f26ff54ca')}, (err, collection) =>{
    if (err) {
      return console.log('error');
    }
    console.log(collection);
    console.log(collection._id.getTimestamp());
  }) */

/*   db.collection('users').find({age: 27}).toArray((err, users) => {
    if (err) {
      console.log(err);
    }
    console.log(users);
  }) */

  db.collection('users').countDocuments({age: 27}, (err, users) => {
    if (err) {
      console.log(err);
    }
    console.log(users);
  })
})
