const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5a876513dc15116758cbb58e'}).then((todo) => {
    console.log(todo)
});

Todo.findByIdAndRemove('5a876513dc15116758cbb58e').then((todo) => {
    console.log(todo)
});
