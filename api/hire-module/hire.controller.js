/*
 *
 * This file will have all the user management related functions
 * 
 */
const Hire = require("./hire");
const User = require("../user-module/user");
const Notify = require("../common/notification");
const { logger } = require("../../utils");
const dotenv = require("dotenv");
const _hire = {};

dotenv.config();

_hire.search = async function(payloadData) {
  logger.info(payloadData);
  const criteria = {};
  if (payloadData.term) {
    criteria.name = {
      $regex: payloadData.term || "",
      $options: "gi"
    };
  }
  const projection = {};
  const option = {
    lean: true
  };
  const userList = await User.find(criteria, projection, option);
  return userList;
};

_hire.hireAssist = async function(payloadData) {
  logger.info(payloadData);
  const hire = await new Hire(payloadData).save();
  const helper = await User.findById(payloadData.helper);
  const payload = {
    email: helper.email,
    subject: "You are requested for work",
    message: `Can you please come for work from ${hire.start} to ${hire.end}.`
  };
  Notify(payload).then(
    response => logger.info(response),
    error => logger.error(error)
  );
  if (hire) {
    return hire.toObject();
  } else {
    throw new Error("Unable to hiring requested resource");
  }
};

_hire.hireStatus = async function(userData, payloadData) {
  logger.info(payloadData);
  const criteria = {
    _id: payloadData.hireId
  };
  const projection = {};
  const option = {};
  const hire = await Hire.findOne(criteria, projection, option).catch(error => {
    logger.error(error);
    return null;
  });
  if (payloadData.status == "ACCEPTED") {
    // (StartA <= EndB) and (EndA >= StartB)
    const criteria = {
      $and: [
        {
          _id: {
            $ne: payloadData.hireId
          }
        },
        {
          helper: userData._id,
          start: {
            $lte: hire.end
          },
          end: {
            $gte: hire.start
          },
          status: "ACCEPTED"
        }
      ]
    };
    const projection = {};
    const option = {
      lean: true
    };
    const foundHire = await Hire.find(criteria, projection, option).catch(
      error => {
        logger.error(error);
        return null;
      }
    );
    if (!(foundHire && foundHire[0])) {
      hire.status = payloadData.status || hire.status;
      const savedHire = await hire.save();
      const client = await User.findById(hire.client);
      const payload = {
        email: client.email,
        subject: "Helper has updated the status",
        message: `He has ${hire.status} for work from ${hire.start} to ${
          hire.end
        }.`
      };
      Notify(payload).then(
        response => logger.info(response),
        error => logger.error(error)
      );
      return savedHire.toObject();
    } else {
      throw new Error("Unable to accept the request of same time");
    }
  } else {
    hire.status = payloadData.status || hire.status;
    const savedHire = await hire.save();
    return savedHire.toObject();
  }
};

module.exports = _hire;
