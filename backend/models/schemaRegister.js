const Joi = require('joi');

const registerValidation = (data) => {

    

    const schema = Joi.object({
        COURRIEL: Joi.string()
            .required()
            .email(),

        MDP: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

        NOM: Joi.string(),

        PRENOM: Joi.string(),

        D_NAISS: Joi.date(),

        SEXE: Joi.boolean(),

        ADRESSE: Joi.string(),

        TEL: Joi.number(),

        ETAT_CIVIL: Joi.string(),

        ID_P: Joi.string(),

        FACEBOOK: Joi.string(),

        TWITTER: Joi.string(),

        INSTAGRAM: Joi.string(),

        ID_NATIONALITE: Joi.string().length(2),

        ID_ROLE: Joi.any().valid("0"),

        PATH_IMG: Joi.string()

    });

    return schema.validate(data);
}

module.exports = registerValidation

