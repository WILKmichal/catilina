const Joi = require('joi');

let verif = {}

verif.sousThemeCreation = (data) => {

    const schema = Joi.object({

        TOKEN: Joi.string().required(),

        NOM_SOUS_THEME: Joi.string().required(),

        ID_THEME: Joi.string().required()
        
    })


    return schema.validate(data);
}

verif.sousThemeSuppr = (data) => {

    const schema = Joi.object({

        TOKEN: Joi.string().required(),

        ID_SOUS_THEME: Joi.string().required()
            
    })


    return schema.validate(data);
}

module.exports = verif