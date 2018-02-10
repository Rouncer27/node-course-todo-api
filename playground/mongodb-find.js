const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', ( err, db ) => {
    if( err ) {
        return console.log('unable to connect to Mongo database server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a7f7dc2dc15116758c9f675')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    // db.collection('Todos').find({completed: false}).count().then((count) => {
    //     console.log('Todos count: ', count);
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Trevor Rounce'}).toArray().then((users) => {
        console.log('here are the trevors: ', users);
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    // db.close();
});