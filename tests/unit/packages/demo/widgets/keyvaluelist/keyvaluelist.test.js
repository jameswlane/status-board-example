const fs = require("fs");
const path = require('path');
var filePath = path.normalize(path.join(__dirname, '../../../../../../packages/demo/widgets/keyvaluelist/keyvaluelist.js'));

describe('Key Value List Widget', function () {
  test('Example dummy test', function (done) {
    function callback(error, data) {
      if (error) {
        console.error("read error:  " + error.message);
      } else {
        var widget;
        eval(data);
        expect(widget.onData).toMatchSnapshot();
        done();
      }
    }

    fs.readFile(filePath, "utf8", callback);
  });
});