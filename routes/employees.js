const { addEmployee, getEmployee, deleteEmployee, updateEmployee, getEmployeeById } = require('../controllers/companyControllers')
const app = require('express').Router();


app.post('/addEmployee', addEmployee);

app.get('/getEmployee', getEmployee);

app.get('/getById', getEmployeeById);

app.delete('/deleteEmployee', deleteEmployee);

app.put('/updateEmployee', updateEmployee);

module.exports = app;