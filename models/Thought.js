const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'You must provide a thought',
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatDate
    },
    username: {
        type: String,
        required: 'You must provide a username'
    },
    reaction: []
}, { 'toJSON':{ getters: true }});

function formatDate(date) {
    return date.toString()
}

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;