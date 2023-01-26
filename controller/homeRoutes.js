// need connections for the following routes:
    // landing page
        //includes existing blog posts + navigation links 
    //  can navigate to the homepage
    // Navigate to dashboard
    // sign up/login page

const router = require('expres').Router();
const {} = require('../model');

// landing page
router.get('/', (req, res) => {
    // LOGIN DATA
    if (req.session.loggedIn) {
        res.redirect('/homepage');
    }
    res.render('landingpage');
})

// dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

// homepage
router.get('/homepage', (req, res) => {
    res.render('homepage');
})

// login page
router.get('/login', (req, res) => {
    res.render('login');
})

// signup page
router.get('/signup', (req, res) => {
    res.render('signup');
})