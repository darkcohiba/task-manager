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


    db.collection("tasks").insertMany([
        {
            description: 'Create lesson plan',
            completed: true
        },
        {
            description: 'Teach walkthrough and document all follow up questions',
            completed: true
        },
        {
            description: 'Hire Elephant for training and make sure it has water',
            completed: true
        }
    ])
});
//read

//update

//delete