const Joi = require('joi');

let verif = {}

verif.concoursValidationCreation = (data) => {

    const schema = Joi.object({

        LIBEL_SH: Joi.string().required(),

        LIBEL_L: Joi.string().required(),

        DATE_FIN: Joi.date().required(),

        ID_SOUS_THEME: Joi.string().required()
        
    })


    return schema.validate(data);
}

module.exports = verif