const Joi = require('joi');

const creationDeTheme = (data) => {

    const schema = Joi.object({

        NOM_THEME: Joi.string().required()
        
    })


    return schema.validate(data);
}

module.exports = creationDeTheme