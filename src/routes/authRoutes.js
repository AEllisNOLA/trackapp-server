const express = require('express')

// Create router to associate with the route handlers to be created
const router = express.Router()

// Route Handlers
router.post('/signup', (req, res) => {
    res.send("You made a POST request")
})

module.exports = router;