const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true,
    },
    flag: {
        type: String,
        require: true,
        unique: true
    },
    value: {
        type: String
    }
});

const Tasks = mongoose.model('Tasks', TasksSchema);

module.exports = Tasks;