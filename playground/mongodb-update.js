const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', ( err, db ) => {
    if( err ) {
        return console.log('unable to connect to Mongo database server.');
    }
    console.log('Connected to MongoDB server.');

    // findOneAndUpdate. //

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a7f96d3dc15116758ca04b6')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a7f9c82ba42810557f12d4c')
    }, {
        $set: {
            name: 'Mars McDuck'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});