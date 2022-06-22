const express = require('express');
const app = express();
const employees = require('./Hard.json');


// to get all employees
app.get('/employees', (req, res) => {
    res.send(employees);
});

// to get a single employee from ID 
app.get("/employees/:employeeID", function (req, res) {
    const employeeID = req.params.employeeID - 1
    if (req.params.employeeID > employees.Employees.length) {
        res.send('The employee with the given ID was not found')
    } else {
        res.send(employees.Employees[employeeID])
    }
    res.send(employees)
});

app.listen(3000, () => console.log('Listening on port 3000'));
