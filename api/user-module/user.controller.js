/*
 *
 * This file will have all the user management related functions
 * 
 */
const User = require("./user");
const utils = require("../../utils");
const TokenManager = require("../common/token.manager");
const dotenv = require("dotenv");
const crypto = require("crypto");
const _user = {};

dotenv.config();

_user.signup = async function(payloadData) {
  if (!payloadData.email || !payloadData.password) {
    throw new Error("Please pass username and password.");
  } else {
    // Hash Password
    var data = {};
    payloadData.password = utils.helpers.hash(payloadData.password);
    if (payloadData.role == "HELPER") payloadData.onboarding = true;
    const user = new User(payloadData);
    await user.save();
    data["id"] = user._id.toString();
    data["email"] = user.email;
    data["name"] = user.name;
    data["token"] = await TokenManager.signToken(data);
    return data;
  }
};

_user.login = async function(payloadData) {
  if (!payloadData.email || !payloadData.password) {
    throw new Error("Please send email and password.");
  } else {
    // Hash Password
    const data = {};
    payloadData.password = utils.helpers.hash(payloadData.password);
    const criteria = {
      email: payloadData.email,
      password: payloadData.password
    };
    const projection = {
      password: 0
    };
    const option = {
      lean: true
    };
    const user = await User.findOne(criteria, projection, option).catch(
      error => {
        utils.logger.error(error);
        return null;
      }
    );
    if (!user) {
      throw new Error("User Not found");
    } else {
      data["id"] = user._id.toString();
      data["email"] = user.email;
      data["name"] = user.name;
      data["onboarding"] = user.onboarding;
      data["token"] = await TokenManager.signToken(data);
      return data;
    }
  }
};

// Get Particular User Profile
_user.getProfile = async function(userData) {
  const criteria = {
    _id: userData._id
  };
  const projection = {
    _id: 0,
    password: 0,
    created: 0
  };
  const option = {
    lean: true
  };
  const user = await User.findOne(criteria, projection, option).catch(error => {
    utils.logger.error(error);
    return null;
  });
  if (user) {
    return user;
  } else {
    throw new Error("No user found");
  }
};

// Get Particular User Profile
_user.updateProfile = async function updateProfile(userData, payloadData) {
  const criteria = {
    _id: userData._id
  };
  const projection = {
    password: 0
  };
  const option = {};
  const user = await User.findOne(criteria, projection, option);
  user.name = payloadData.name || user.name || "";
  user.address = payloadData.address || user.address || "";
  user.location = user.location || {};
  user.location.coordinates =
    user.location.coordinates || user.location.coordinates || [];
  user.service = payloadData.service || user.service || [];
  user.photoId = payloadData.photoId || user.photoId || "";
  return user.save();
};

_user.helperOnboarding = async function(userData, payloadData) {
  const criteria = {
    _id: userData._id
  };
  const projection = {
    password: 0
  };
  const option = {};
  const user = await User.findOne(criteria, projection, option);
  if (!user.onboarding) {
    throw new Error("No onboarding process required or it is already done");
  } else {
    user.service = payloadData.service || user.service || [];
    user.photoId = payloadData.photoId || user.photoId || "";
    user.onboarding = false;
    return user.save();
  }
};

//Forgot Password
_user.forgotPassword = async function(payloadData) {
  if (!payloadData || !payloadData.email) {
    throw new Error("Please enter the email address");
  } else {
    const criteria = {
      email: payloadData.email
    };
    const projection = {};
    const option = {};
    const data = await User.findOne(criteria, projection, option);
    if (!data) {
      throw new Error("No user found");
    } else {
      const buffer = crypto.randomBytes(20);
      data.resetToken = buffer.toString("hex");
      await data.save();
      const userData = {
        name: data.name,
        email: data.email,
        resetToken: data.resetToken
      };
      userData["token"] = await TokenManager.signToken(userData);
      return userData["token"];
    }
  }
};

_user.verifyToken = async function(payloadData) {
  if (!payloadData || !payloadData.token) {
    throw new Error("Please enter the token");
  } else {
    const decodedData = await TokenManager.verifyToken(payloadData.token);
    const criteria = {
      email: decodedData.email,
      resetToken: decodedData.resetToken
    };
    const projection = {
      email: 1,
      name: 1,
      resetToken: 1
    };
    const option = {
      lean: true
    };
    const data = await User.findOne(criteria, projection, option);
    if (!data) {
      throw new Error("No User Found");
    } else {
      const dataToSend = {
        name: data.name || "",
        email: data.email || "",
        token: payloadData.token
      };
      return dataToSend;
    }
  }
};

// Change Password of the User
_user.changePassword = async function changePassword(payloadData) {
  const decodedData = await TokenManager.verifyToken(payloadData.token);
  const criteria = {
    email: decodedData.email,
    resetToken: decodedData.resetToken
  };
  const projection = {
    email: 1,
    name: 1,
    resetToken: 1,
    password: 1
  };
  const option = {};
  const data = await User.findOne(criteria, projection, option);
  if (!data) {
    throw new Error("User Not Found");
  } else {
    data.resetToken = "";
    data.password = utils.helpers.hash(payloadData.password);
    await data.save();
    return { status: "Successfully changed password !!" };
  }
};

module.exports = _user;
