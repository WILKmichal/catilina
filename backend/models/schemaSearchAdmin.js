const Joi = require('joi');

const validation = {}

validation.roleSearch = (data) => {



    const schema = Joi.object({

        ID_ROLE: Joi.any().valid("1", '2').required()

    });

    return schema.validate(data);
}

module.exports = validation
