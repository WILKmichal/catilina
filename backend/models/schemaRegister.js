const Joi = require('joi');

const registerValidation = (data) => {

    const schema = Joi.object({
        COURRIEL: Joi.string()
            .required()
            .email(),

        MDP: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })


    return schema.validate(data);
}

module.exports = registerValidation

