// var MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser:true}, function (err, client) {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5c687c7f3d605705e44488f2")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    //     client.close();
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     client.close();
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // })

    db.collection('Users').find({
        name: 'Marcus' 
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2))
        client.close();
    }, (err) => {
        console.log("Unable to fetch todos", err);
    })
    
});
