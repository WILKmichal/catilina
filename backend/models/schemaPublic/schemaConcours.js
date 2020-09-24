const Joi = require('joi');

const schemaValidation = {}

schemaValidation.concoursListeValidation = (data) => {

    const schema = Joi.object({

        ID_SOUS_THEME : Joi.string().required(),

    })


    return schema.validate(data);
}


schemaValidation.concoursValidation = (data) => {

    const schema = Joi.object({

        ID_CONCOURS : Joi.string().required(),

    })


    return schema.validate(data);
}


module.exports = schemaValidation