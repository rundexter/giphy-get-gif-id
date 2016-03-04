var assert = require('assert');

module.exports = {
  run: function (step, dexter) {
    //access token
    var accessToken = dexter.environment('access_token');
    var giphy = require('giphy-api')(accessToken);

    //inputs
    var gif_id = step.input('gif_id').first();

    //validation
    assert(gif_id, 'Id of gif is required.');

    //execution
    giphy.id(gif_id, function (err, res) {
      if (err) return this.fail(err);
      this.complete(res);
    }.bind(this));
  }
};
