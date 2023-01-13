//documentation: https://mongodb.github.io/node-mongodb-native/3.1/api/index.html


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.Object

//or

// const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";




//create
// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>  {
//     if (error) {
//         return console.log('unable to connect')
//     }

//     const db = client.db(databaseName);
//     // insert one
//     db.collection("users").insertOne({
//         name: 'Sam Waters',
//         age: 30
//     })

//     // insert many
//     db.collection("users").insertMany([
//         {
//           name: 'Jen',
//           age: 28,
//         },
//         {
//           name: 'Gunther',
//           age: 27
//         }
//     ])


//     db.collection("tasks").insertMany([
//         {
//             description: 'Create lesson plan',
//             completed: true
//         },
//         {
//             description: 'Teach walkthrough and document all follow up questions',
//             completed: true
//         },
//         {
//             description: 'Hire Elephant for training and make sure it has water',
//             completed: true
//         }
//     ])

// });
//read

// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>  {
//     if (error) {
//         return console.log('unable to connect')
//     }

//     const db = client.db(databaseName)


//find one
    // db.collection("tasks").findOne({completed: true }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to find')
    //     }
        
    //     console.log(result)
    // })

//find

    // db.collection('users').find({ age: 30 }).toArray((error, result) => {
    //     console.log(result)
    // })

//count

    // db.collection('users').find({ age: 30 }).count((error, count) => {
    //     console.log(count)
    // })
// });




//update

//delete