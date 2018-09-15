const User = require('../models/users');

module.exports = {
    signUp: async (req, res, next) => {
        // validate email and password
        const { email, password} = req.value.body.email;
        // Need to add functionality to if user already exists, for some reason this is not working.
        // this isnt working because I am not taking the users email. I am making a new id for each person that signs up. Regardless of what
        // there email is
        const foundUser = await User.findOne({ email });
            if (foundUser === true) {
                return res.status(403).json({error: "email already exists"});
             } else {
                console.log('Your unique id is: ');


                const newUser = new User({email, password});

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