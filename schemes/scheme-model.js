const db = require('../data/config');

function find() {
    return db('schemes');
};

function findById(id){
    return db('schemes').where({id}).first();
};

function findSteps(id){
    return db('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .select('schemes.id', 'scheme_name', 'step_number', 'instructions')
        .where('schemes.id', id)
        .orderBy('step_number')
};

function add(scheme){
    return db('schemes')
        .insert(scheme)
        .then(id => {
            return findById(id[0])
        })
        .catch(err => console.log(err))
};


function update(changes, id){
    return db('schemes')
        .where({id})
        .update(changes)
        .then(id => {
            return findById(id[0])
        })
        .catch(err => console.log(err))
};

function remove(id){
    return db('schemes')
        .where({id})
        .del()
};

module.exports = {
    find,
    findById,
    findSteps, 
    add, 
    update, 
    remove
};