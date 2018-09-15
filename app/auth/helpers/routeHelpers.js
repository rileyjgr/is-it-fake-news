const Joi = require('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);

            // if error

            if (result.error) {
                return res.status(400).json(result.error);
            }

            if (!req.value) { req.value ={}; }
            req.value['body'] = result.value;
            next();
        }
    },

    schemas : {
        authSchema: Joi.object().keys({
            username: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            email: Joi.string().email({ minDomainAtoms: 2 }).required()
        })
    }
};