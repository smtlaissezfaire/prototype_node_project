var path = require("path");

require.paths.unshift(path.join(__dirname, "vendor", "jspec", "lib"));
require.paths.unshift("spec");
require.paths.unshift("lib");

require('jspec');
require('unit/spec.helper');
require('yourlib');

JSpec
  .exec('spec/unit/spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report();
