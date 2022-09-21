// CRUD create read update delete delete 

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log(error)
  }

  const db = client.db(databaseName)

  db.collection('users').updateOne({
    _id: new ObjectId('6329cabcabcd2fb3a58d2a1b')
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: {
      age: 1
    }
  }).then((result) => {
    console.log('UpdateSuccsessfull: ', result);
  }).catch((error) => {
    console.log('ERROR: ', error);
  })

/*   db.collection('users').insertOne({
  _id: id,
  name: 'Valerian',
  age: 27,
}) */

db.collection('users').countDocuments({ age: 27 }, (err, users) => {
  if (err) {
    console.log(err);
  }
  console.log(users);
})
})
