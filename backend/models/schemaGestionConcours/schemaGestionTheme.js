const Joi = require('joi');

let verif = {}


verif.creationDeTheme = (data) => {

    const schema = Joi.object({

        NOM_THEME: Joi.string().required()
        
    })


    return schema.validate(data);
}

verif.deleteTheme = (data) => {

    const schema = Joi.object({

        ID_THEME: Joi.string().required()
        
    })


    return schema.validate(data);
}


module.exports = verif