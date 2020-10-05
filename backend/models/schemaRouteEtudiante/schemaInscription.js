const Joi = require('joi');

const InscriptionValidation = {}
InscriptionValidation.inscriptionConcours = (data) => {

    const schema = Joi.object({
        COURRIEL: Joi.string().email(),

        NOM: Joi.string(),

        PRENOM: Joi.string(),
        // TODO attention format date yankee insertion hazardeuse (ne marche pas traiter la chaine de character(?) avant , la flemme de le faire la)
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

        PATH_IMG: Joi.string(),

        ID_CONCOURS: Joi.number().required()


    })


    return schema.validate(data);
}

module.exports = InscriptionValidation
