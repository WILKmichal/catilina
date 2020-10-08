// const Joi = require('joi');

// const validation = {}

// validation.dashboard = (data) => {



//     const schema = Joi.object({

//         ID_STATUT: Joi.valid("1", "2", "3").required()

//     });

//     return schema.validate(data);
// }

// module.exports = validation



const Joi = require('joi');

const dash = {}

dash.gestionDashboard = (data) => {

    const schema = Joi.object({

        ID_STATUT : Joi.boolean().required(),

    })


    return schema.validate(data);
}

module.exports = dash
