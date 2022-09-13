// CRUD create read update delete delete

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id);


MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client) => {
  if (error) {
    return console.log(error)
  }

  const db = client.db(databaseName)

/*   db.collection('users').insertOne({
    userName: 'myFirstName',
    userAge: 27
  }, (err, result) => {
    if (err) {
      console.log('Unable to insert User');
    }

    console.log(result.ops);
  })

  console.log('conected') */
/* 
  db.collection('users').insertMany([
    {
      userName: 'myFirstName', 
      userAge: 17,
    },
    {
      userName: 'newName', 
      userAge: 26,
    }
  ]), (error, result) => {
    if (error) {
      console.log('Fehler');
    }
    console.log(result.ops);
  } */


  console.log('Before collection');
  db.collection('documents').insertMany([
    {
      description: 'This is doc 1', 
      completed: false,
    },
    {
      description: 'This is doc 2', 
      completed: false,
    },
    {
      description: 'This is doc 3', 
      completed: true,
    }
  ],{ 
    wtimeout: 500,
  }, (error, result) => {
    if (error) {
      console.log('Fehler');
    }
    console.log(result);
  }
  )

})
