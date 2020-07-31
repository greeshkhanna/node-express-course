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

// Start listening to server at Port 8080
app.listen(8080, () => {
    console.log(chalk.green("Server is running on http://localhost:8080"))
})
