
const con = require('../config/db')

const addEmployee = async (req, res, next) => {
    try {
        const { name1, emailAdress, password, phoneNumber } = req.body;

        const sql = `
            INSERT INTO companies (name1, emailAdress, password, phoneNumber)
            VALUES ("${name1}", "${emailAdress}", "${password}", "${phoneNumber}")
        `;
        // const values = [name1, emailAdress, password, phoneNumber];

        console.log(sql, "----------->")
        con.query(sql, [], (err, result) => {
            console.log('hsagdahdgajda')
            if (err) {
                console.error('Error creating employee:', err);
                return res.status(400).json({ message: `Unable to create ${err.message}` });
            }
            else {
                console.log('Employee detail added successfully');
                res.status(200).json({ message: "Employee detail added successfully", data: result });
            }
        });
    } catch (error) {
        res.status(400).json({ message: `Unable to create ${error.message}` });
    }
};


const getEmployee = async (req, res) => {
    try {
        const sql = 'SELECT * FROM companies';

        con.query(sql, (err, results) => {
            if (err) {
                console.error('Error fetching employees:', err);
                return res.status(400).json({ message: `Unable to fetch: ${err.message}` });
            }

            console.log('Employee data fetched successfully');
            res.status(200).json({ message: "Employee Data Fetched Successfully", data: results });
        });
    } catch (error) {
        res.status(400).json({ message: `Unable to fetch: ${error.message}` });
    }
};

const deleteEmployee = async (req, res) => {
    try {

        const employeeID = 1;
        const sql = `DELETE FROM companies WHERE ${id = employeeID};`

        con.query(sql, (err, result) => {
            if (err) {
                console.error('Error While Deleting The Data', err);
                return res.status(400).json({ message: `Unable To Delete: ${err.message}` })
            }
            console.log('Employee Data Deleted');
            res.status(200).json({ message: "Employee Data Deleted", data: result });
        });
    } catch (error) {
        res.status(400).json({ message: `Unable to fetch: ${error.message}` });
    }
}

module.exports = { addEmployee, getEmployee, deleteEmployee }