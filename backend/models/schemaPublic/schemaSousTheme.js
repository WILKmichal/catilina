const Joi = require('joi');

const sousThemeValidation = (data) => {

    const schema = Joi.object({

        ID_THEME : Joi.string().required(),

    })


    return schema.validate(data);
}

module.exports = sousThemeValidation