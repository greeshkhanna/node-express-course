const express = require('express')
const chalk = require('chalk')
const app = express()

app.listen(8080, () => {
    console.log(chalk.green("Server is running on http://localhost:8080"))
})
