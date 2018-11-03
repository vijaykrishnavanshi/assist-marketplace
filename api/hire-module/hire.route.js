"use strict";

/*
 * This file contails all the routes that are related to 
 * auth of the user. 
*/
const express = require("express");
const router = express.Router();
const validate = require("express-validation");
const validation = require("./hire.validation");
const HireController = require("./hire.controller");
const { logger } = require("../../utils");
const auth = require("../../lib/auth");

/**
 * @api {post} /search Search [POST]
 * @apiGroup Hire
 * @apiDescription This api is used by user to search for the Helper on assist merket place.
 * @apiParam {String} term partial name/email/address.
 * @apiParam {String} coordinates location based coordinate array [<lat>, <long>].
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "success": "true",
 *        "message": "Enjoy your token !!",
 *        "data": {
 *          helperList: [{
 *            email: "<email>",
 *            name: "<name>",
 *            address: <address>,
 *            location: <location>
 *          }]
 *        }
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to search.
 *     {
 *       "success": "false",
 *       "message": "Unable to login",
 *       "data": {}
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *       "success": "false",
 *       "message": "Something went wrong",
 *       "data": {}
 *     }
 */

router
  .route("/search")
  .post(validate(validation.search), auth.user, (req, res) => {
    const response = {
      success: false,
      message: "",
      data: {}
    };
    // send only the data that is required by the controller
    logger.info(req.body);
    HireController.search(req.body)
      .then(data => {
        if (!data) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success";
          response.data = data;
          return res.status(200).json(response);
        }
      })
      .catch(error => {
        logger.error(error);
        response.success = false;
        response.message = error.message;
        return res.status(403).json(response);
      });
  });

/**
 * @api {post} /hire-assist Hire [POST]
 * @apiGroup Hire
 * @apiDescription This api is used by user to hire the Helper on assist merket place.
 * @apiParam {String} client Client MongoID.
 * @apiParam {String} helper helper MongoID.
 * @apiParam {Date} start start date time.
 * @apiParam {Date} end end date time.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "success": "true",
 *        "message": "Hire is requested to the helper.",
 *        "data": {
 *          client: <client-mongoID>,
 *          helper: <helper-mongoID>,
 *          start: <start-date-in-utc>,
 *          end: <end-date-in-utc>,
 *          status: <status>
 *        }
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to search.
 *     {
 *       "success": "false",
 *       "message": "Unable to login",
 *       "data": {}
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *       "success": "false",
 *       "message": "Something went wrong",
 *       "data": {}
 *     }
 */

router
  .route("/hire-assist")
  .post(validate(validation.hireAssist), auth.user, (req, res) => {
    const response = {
      success: false,
      message: "",
      data: {}
    };
    // send only the data that is required by the controller
    logger.info(req.body);
    HireController.hireAssist(req.body)
      .then(data => {
        if (!data) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success";
          response.data = data;
          return res.status(200).json(response);
        }
      })
      .catch(error => {
        logger.error(error);
        response.success = false;
        response.message = error.message;
        return res.status(403).json(response);
      });
  });

/**
 * @api {post} /hire-status Hire Status [POST]
 * @apiGroup Hire
 * @apiDescription This api is used by the user or helper on assist merket place.
 * @apiParam {String} hireId Hire MongoID.
 * @apiParam {String} status status of Hire ["ACCEPTED", "REJECTED"].
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "success": "true",
 *        "message": "Hire status is updated.",
 *        "data": {
 *          hireId: <hire-mongoID>,
 *          status: <status>
 *        }
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to search.
 *     {
 *       "success": "false",
 *       "message": "Unable to login",
 *       "data": {}
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *       "success": "false",
 *       "message": "Something went wrong",
 *       "data": {}
 *     }
 */

router
  .route("/hire-status")
  .post(validate(validation.hireStatus), auth.helper, (req, res) => {
    const response = {
      success: false,
      message: "",
      data: {}
    };
    // send only the data that is required by the controller
    logger.info(req.body);
    HireController.hireStatus(req.user, req.body)
      .then(data => {
        if (!data) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success";
          response.data = data;
          return res.status(200).json(response);
        }
      })
      .catch(error => {
        logger.error(error);
        response.success = false;
        response.message = error.message;
        return res.status(403).json(response);
      });
  });

module.exports = router;
