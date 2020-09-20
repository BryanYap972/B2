import chai, { assert } from "chai";
import chaiHttp from "chai-http";

const app = require("../server");

chai.use(chaiHttp);
chai.should();

describe("Tests", () => {
  describe("/GET test", () => {
    it("it should GET all the users", function (done) {
      try {
        chai
          .request(app)
          .get("/users")
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      } catch (done) {}
    });
  });
});
