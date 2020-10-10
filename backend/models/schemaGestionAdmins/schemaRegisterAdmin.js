const Joi = require('joi');

const validation = {}

validation.registerValidation = (data) => {



    const schema = Joi.object({

        TOKEN : Joi.string().required(),
        
        COURRIEL: Joi.string()
            .required()
            .email(),

        MDP: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

        NOM: Joi.string().required(),

        PRENOM: Joi.string().required(),


        ID_ROLE: Joi.any().valid("1", '2').required()

    });

    return schema.validate(data);
}

validation.deleteAdmin = (data) => {
    const schema = Joi.object({

        ID_USER: Joi.string()
            .required()

    });

    return schema.validate(data);
}

module.exports = validation

