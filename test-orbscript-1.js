let orbScriptLexer = require('./lexers/orbscript-dsl.js');

//var tokens = orbScriptLexer('base attack 30;base speed 10;cap speed 30');
var tokens = orbScriptLexer('base attack 30');

console.log(JSON.stringify(tokens));