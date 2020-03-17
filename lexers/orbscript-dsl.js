
var langTokens = [{
        lexeme: 'base',
        type: 'keyword',
        regEx: /base /,
        //regEx: /base\{[a-z]+\,\d+/
    }, {
        lexeme: 'cap',
        type: 'keyword',
        regEx: /cap /,
        //regEx: /base\{[a-z]+\,\d+/
    }, , {
        lexeme: 'attack',
        type: 'property',
        regEx: /attack /,
        //regEx: /base\{[a-z]+\,\d+/
    }, , {
        lexeme: 'speed',
        type: 'property',
        regEx: /speed /,
        //regEx: /base\{[a-z]+\,\d+/
    }, {
        lexeme: 'number',
        type: 'value',
        regEx: /\d+/,
        //regEx: /base\{[a-z]+\,\d+/
    },
];

// just export the lexer function
module.exports = function (orbScript) {
    var tokens = [],
    lines = orbScript.split(';');
    return lines.map(currentLine => {

        return currentLine.match(langTokens[0].regEx);

    });
};
