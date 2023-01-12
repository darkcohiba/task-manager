const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";



//create
MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>  {
    if (error) {
        return console.log('unable to connect')
    }

    const db = client.db(databaseName);

    db.collection("users").insertOne({
        name: 'Sam Waters',
        age: 30
    })

});
//read

//update

//delete