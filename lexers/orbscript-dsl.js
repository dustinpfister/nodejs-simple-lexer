
var langTokens = [{
        lexeme: 'base',
        type: 'keyword',
        regEx: /base /,
        //regEx: /base\{[a-z]+\,\d+/
    }, {
        lexeme: 'cap',
        type: 'keyword',
        regEx: /cap /,
    }, , {
        lexeme: 'attack',
        type: 'property',
        regEx: /attack /,
    }, , {
        lexeme: 'speed',
        type: 'property',
        regEx: /speed /,
    }, {
        lexeme: 'number',
        type: 'value',
        regEx: /\d+/,
    },
];

// just export the lexer function
module.exports = function (orbScript) {
    var tokens = [],
    //tokenLen = tokens.length,
    lines = orbScript.split(';');
    return lines.map(currentLine => {

        let lineTokens = currentLine.split(' ');

        return lineTokens.map((token) => {

            return token;

        });
    });
};
