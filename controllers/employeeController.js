const express  = require('express')
const router   = express.Router()
const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')

router.get('/', (req, res) => {
    res.render('employee/form', {title : "Insert Form"})
})

router.post('/', (req, res) => {
    if (req.body._id == '')
    insertRecord(req, res);
    else
    updateRecord(req, res);
})

function insertRecord(req, res) {
    const employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.email    = req.body.email;
    employee.mobile   = req.body.mobile;
    employee.city     = req.body.city;
    employee.save((err, doc) => {
        (!err)? res.redirect('employee/index') : console.log('Insert Error'+ err)
    });
}

function updateRecord(req, res) {
    Employee.findByIdAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        (!err) ? res.redirect('employee/index') : console.log('Insert Error'+ err)
    });
}

router.get('/index', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("employee/index", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("employee/form", {
                viewTitle: "Update Employee",
                employee: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/employee/index');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router