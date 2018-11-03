"use strict";

/*
 * This file contains code for validation of request params 
 */

const Joi = require("joi");

const strictChecking = {
  allowUnknownBody: false,
  allowUnknownHeaders: true,
  allowUnknownQuery: false,
  allowUnknownParams: false,
  allowUnknownCookies: false
};

const _validation = {};

_validation.search = {
  options: strictChecking,
  body: {
    term: Joi.string()
      .lowercase()
      .optional(),
    coordinates: Joi.array().optional()
  }
};

_validation.hireAssist = {
  options: strictChecking,
  body: {
    client: Joi.string()
      .lowercase()
      .required(),
    helper: Joi.string()
      .lowercase()
      .required(),
    start: Joi.date().required(),
    end: Joi.date().required()
  }
};

_validation.hireStatus = {
  options: strictChecking,
  body: {
    hireId: Joi.string()
      .lowercase()
      .required(),
    status: Joi.string()
      .valid(["ACCEPTED", "REJECTED"])
      .required()
  }
};

module.exports = _validation;
