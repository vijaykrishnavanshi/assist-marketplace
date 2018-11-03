const assert = require("assert");
const HireController = require("../hire.controller");

describe("Hire Controller", function() {
  describe("#search()", function() {
    it("should not error when no param is passed", function() {
      const payloadData = {};
      return HireController.search(payloadData)
        .then(data => {
          assert.greater(data.length, 0);
        })
        .catch(err => {
          assert.equal(err, null);
        });
    });
  });
});
