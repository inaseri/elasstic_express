const elasticDb = require('../../config/db.config');

elasticDb.indices.create({
    index: 'source_type'
},function(err,resp,status) {
    if(err) {
        console.log('The index already exist');
    }
    else {
        console.log('Index successfully created');
    }
});

module.exports = elasticDb;
