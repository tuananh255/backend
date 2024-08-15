import Joi from "joi";

export const email = Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required()
export const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()