const express = require('express') // For making an express Server
const chalk = require('chalk') // For Better looking logs
const bodyParser = require('body-parser') // For sending POST Requests

// Mock Data to send as a response from Express Server
const mockUserData = [
    {
        name: "Mayank"
    },
    {
        name: "Greesh"
    }
]

// Create a new Express Server
const app = express()

// Making the data to be sent as a POST request to be JSON
app.use(bodyParser.json())

// Fetch all users
app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: "Successfully fetched the users",
        users: mockUserData
    })
})

// Reading URL Params -> Fetching specific user using id
app.get('/users/:id', (req, res) => {
    console.log(chalk.yellow("Request Parameters ID: "), req.params.id)
    res.json({
        success: true,
        message: 'Got the user by ID',
        user: req.params.id
    })
})

// POST request 
app.post('/login', (req, res) => {
    const {username, password} = req.body;

    const mockUsername = "billyTheKid"
    const mockPassword = "superSecret"

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: "Password and Username match!",
            token: "Encrypted token goes here"
        })
    } else {
        res.json({
            success: false,
            message: "Password and Username don't match."
        })
    }
})


// Start listening to server at Port 8080
app.listen(8080, () => {
    console.log(chalk.green("Server is running on http://localhost:8080"))
})
