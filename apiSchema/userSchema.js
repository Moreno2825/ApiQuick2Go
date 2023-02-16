const Joi = require('@hapi/joi');

module.exports.signup = Joi.object().keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required()
});

module.exports.login = Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required()
});
