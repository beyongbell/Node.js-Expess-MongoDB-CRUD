const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: "This field is required."
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    },
})

mongoose.model('Employee', employeeSchema)