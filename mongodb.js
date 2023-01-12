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
    //insert one
    // db.collection("users").insertOne({
    //     name: 'Sam Waters',
    //     age: 30
    // })

    //insert many
    // db.collection("users").insertMany([
    //     {
    //       name: 'Jen',
    //       age: 28,
    //     },
    //     {
    //       name: 'Gunther',
    //       age: 27
    //     }
    // ])
});
//read

//update

//delete