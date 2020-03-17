
var langTokens = [{
        lexeme: 'base',
        type: 'function',
        regEx: /base\{[a-z]+\,\d+/
    }
];

// just export the lexer function
module.exports = function (orbScript) {
    var tokens = [],
    lines = orbScript.split(';');
    return lines[0].match(langTokens[0].regEx);
};
