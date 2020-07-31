const express = require('express') // For making an express Server
const chalk = require('chalk') // For Better looking logs

// Create a new Express Server
const app = express()

// Mock Data to send as a response from Express Server
const mockUserData = [
    {
        name: "Mayank"
    },
    {
        name: "Greesh"
    }
]

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


// Start listening to server at Port 8080
app.listen(8080, () => {
    console.log(chalk.green("Server is running on http://localhost:8080"))
})
