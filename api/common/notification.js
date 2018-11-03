const ses = require("node-ses");
const { logger } = require("../../utils");

let sesClient = ses.createClient({
  key: process.env.AWS_KEY,
  secret: process.env.AWS_SECRET
});

// Only needs message, to and subject fields to send a email

const sendEmail = async payload => {
  return new Promise((resolve, reject) => {
    sesClient.sendEmail(
      {
        to: payload.email,
        from: process.env.FROM || "vijaykrishnavanshi@gmail.com",
        bcc: [process.env.BCC || "dummy@vijaykrishnavanshi.ml"],
        subject: payload.subject,
        message: payload.message
      },
      function(err, data) {
        if (err) {
          logger.error(err);
          reject(err);
        } else {
          logger.info(data);
          resolve(data);
        }
      }
    );
  });
};

module.exports = sendEmail;
