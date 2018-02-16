var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3010;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        console.log('404!! todo Id not valid!');
        return res.status(404).send();
    }

    Todo.findById(id).then( ( todo ) => {
        if(!todo) {
            // console.log('Id not found!');
            return res.status(404).send();
        }
        res.send({ todo });
    }, (err) => {
        res.status(404).send();
    });
});




app.listen( port, () => {
    console.log(`started on port ${port}`);
});


module.exports = {app};