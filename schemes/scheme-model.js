const db = require('../data/config');

function find() {
    return db('schemes');
};

function findById(id){
    return db('schemes').where({id}).first();
};

function findSteps(id){
    return db('steps')
        .join('schemes', 'steps.scheme_id', 'schemes.id')
        .where({id})
        .select('steps.id', 'steps.step_number', 'steps.instructions', 'scheme.scheme_name')
        .orderBy('steps.step_number');
};

// function add(scheme){
//     return db.
// }

module.exports = {
    find,
    findById,
    findSteps
};