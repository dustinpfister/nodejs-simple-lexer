let orbScriptLexer = require('./lexers/orbscript-dsl.js');

var tokens = orbScriptLexer('base{attack,30;base{speed,10');

console.log(tokens);