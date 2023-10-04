const mongoose = require('mongoose');

exports.dbconnection = () => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const dbcrud = mongoose.connection;
    dbcrud.on('error', (err) => console.log(err));   
    dbcrud.once('open', () => console.log('connected to database!'));
}
