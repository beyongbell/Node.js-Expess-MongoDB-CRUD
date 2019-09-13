const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    (!err) ? console.log('MongoDB Connected!') : console.log('Error in DB Connetion : ' + err)
})

require('./employee.model')