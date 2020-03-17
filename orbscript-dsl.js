
var langTokens = [{
        lexeme: 'base',
        type: 'function',
        regEx: /base\{[a-z]+\,\d+/
    }
];

var OrbScriptLexer = function (orbScript) {
    var tokens = [],
    lines = orbScript.split(';');
    return lines[0].match(langTokens[0].regEx);
};

var tokens = OrbScriptLexer('base{attack,30;base{speed,10');

console.log(tokens);