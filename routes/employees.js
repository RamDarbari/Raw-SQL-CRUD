const { addEmployee, getEmployee, deleteEmployee } = require('../controllers/companyControllers')
const app = require('express').Router();


app.post('/addEmployee', addEmployee);

app.get('/getEmployee', getEmployee);

app.delete('/deleteEmployee', deleteEmployee);

module.exports = app;