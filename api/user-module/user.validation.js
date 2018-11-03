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

_validation.signup = {
  options: strictChecking,
  body: {
    email: Joi.string()
      .lowercase()
      .required(),
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
      .required(),
    name: Joi.string().optional(),
    address: Joi.string().optional(),
    location: Joi.object()
      .keys(["latitude", "longitude"])
      .optional()
  }
};

_validation.login = {
  options: strictChecking,
  body: {
    email: Joi.string()
      .lowercase()
      .required(),
    password: Joi.string().required()
  }
};

_validation.getProfile = {
  options: strictChecking,
  headers: {
    authorization: Joi.string().required()
  }
};

_validation.updateProfile = {
  options: strictChecking,
  headers: {
    authorization: Joi.string().required()
  },
  body: {
    name: Joi.string().optional(),
    address: Joi.string().optional(),
    location: Joi.object()
      .keys(["latitude", "longitude"])
      .optional()
  }
};

_validation.helperOnboarding = {
  options: strictChecking,
  headers: {
    authorization: Joi.string().required()
  },
  body: {
    service: Joi.array().optional(),
    photoId: Joi.string().optional()
  }
};

_validation.forgotPassword = {
  options: strictChecking,
  body: {
    email: Joi.string()
      .email()
      .lowercase()
      .required()
  }
};

_validation.verifyToken = {
  options: strictChecking,
  body: {
    token: Joi.string().required()
  }
};

_validation.changePassword = {
  options: strictChecking,
  body: {
    token: Joi.string().required(),
    password: Joi.string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
      .required()
  }
};

module.exports = _validation;
