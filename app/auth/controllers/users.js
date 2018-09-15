const User = require('../models/users');

module.exports = {
    signUp: async (req, res, next) => {

        const name = req.value.body.name;
        // validate email and password
        const email = req.value.body.email;
        const username = req.value.body.username;
        const password = req.value.body.password;
        // Need to add functionality to if user already exists, for some reason this is not working.

        const foundUser = await User.findOne({email});
        if (foundUser === true) {
            return res.status(403).json({error: "email already exists"});
        } else {
            console.log('Your unique id is: ');


            const newUser = new User({name, username, email, password});

            await newUser.save();
            console.log(newUser);
            res.json({user: 'created'});
            next();
        }
    },

    signIn: async (req, res, next) =>{
        // Generate token
        console.log('UsersController.signIn() called!');
    },

    secret: async (req, res, next) =>{
        console.log('UsersController.secret() called!');
    }
};