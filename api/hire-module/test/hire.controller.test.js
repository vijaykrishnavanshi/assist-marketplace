const assert = require("assert");
const HireController = require("../hire.controller");

describe("Dummy Controller", function() {
  describe("#get()", function() {
    it("should error when no data is present in the db", function() {
      const queryData = {
        status: true
      };
      HireController.get(queryData).catch(err => {
        assert.equal(err, new Error("Data not found"));
      });
    });
  });
  describe("#post()", function() {
    it("should not create data if body is empty", function() {
      const queryData = {};
      HireController.post(queryData)
        .then(data => {
          assert.not.exist(data);
        })
        .catch(err => {
          assert.exist(err);
        });
    });
  });
});
