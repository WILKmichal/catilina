const Joi = require('joi');

const concoursValidation = (data) => {

    const schema = Joi.object({

        ID_SOUS_THEME : Joi.string().required(),

    })


    return schema.validate(data);
}

module.exports = concoursValidation