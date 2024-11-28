const express = require('express')
const router = express.Router()

//GET renders pages
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Feedback app', author: 'Natasha Wright'});
})

router.get('/student_feedback_form', function (req, res, next) {
    res.render('student_feedback_form')
});

//POST handles form submissions
router.post('/submit-feedback', function (req, res, next) {


    const formData = req.body; //get data from form

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        message: formData.comments,
        currentStudent: formData['current-student']
    })

})

module.exports = router