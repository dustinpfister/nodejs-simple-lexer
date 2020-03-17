let orbScriptLexer = require('./lexers/orbscript-dsl.js');

let tokens = orbScriptLexer('base attack 30');

console.log(JSON.stringify(tokens));
