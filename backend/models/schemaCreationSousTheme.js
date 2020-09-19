const Joi = require('joi');

const creationSousTheme = (data) => {

    const schema = Joi.object({

        NOM_SOUS_THEME: Joi.string().required(),

        ID_THEME: Joi.string().required()
        
    })


    return schema.validate(data);
}

module.exports = creationSousTheme