const Joi = require('joi');

const loginValidation = (data) => {

    const schema = Joi.object({
        COURRIEL: Joi.string()
            .required()
            .email(),

        MDP: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })


    return schema.validate(data);
}

module.exports = loginValidation
