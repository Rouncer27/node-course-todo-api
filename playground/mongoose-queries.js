const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = "5a8726783f7288a4d7832509";

// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid!');
//     return;
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found!');
//     }
//     console.log('Todo: ', todo);
// });


// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found!');
//     }
//     console.log('Todo by id: ', todo);
// }).catch( (e) => { console.log(e) });


var userId = '5a826e7704ed49df60fdf21e';

// if(!ObjectID.isValid(userId)) {
//     console.log('User Id not valid!');
//     return;
// }

User.findById(userId).then( (user) => {
    if(!user) {
        return console.log('User not found!');
    }

    console.log('User is: ', user);
}, (err) => {

    console.log(err);
    
}).catch( (e) => { console.log(e) }); 
















