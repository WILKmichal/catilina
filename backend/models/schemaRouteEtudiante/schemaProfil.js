const Joi = require('joi');

const InscriptionValidation = {}
InscriptionValidation.modifProfil = (data) => {

    const schema = Joi.object({
        COURRIEL: Joi.string().email().required(),

        NOM: Joi.string().required(),

        PRENOM: Joi.string().required(),
        // TODO attention format date yankee insertion hazardeuse (ne marche pas traiter la chaine de character(?) avant , la flemme de le faire la)
        D_NAISS: Joi.date().required(),

        SEXE: Joi.boolean().required(),

        ADRESSE: Joi.string().required(),

        TEL: Joi.number().required(),

        ETAT_CIVIL: Joi.string().required(),

        ID_P: Joi.string().required(),

        FACEBOOK: Joi.string().required(),

        TWITTER: Joi.string().required(),

        INSTAGRAM: Joi.string().required(),

        ID_NATIONALITE: Joi.string().length(2).required(),

    })


    return schema.validate(data);
}

module.exports = InscriptionValidation
