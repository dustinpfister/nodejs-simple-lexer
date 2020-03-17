
var langTokens = [{
        desc: 'base',
        type: 'keyword',
        regEx: /base/
        //regEx: /base\{[a-z]+\,\d+/
    }, {
        desc: 'cap',
        type: 'keyword',
        regEx: /cap/
    }, {
        desc: 'attack',
        type: 'property',
        regEx: /attack/
    }, {
        desc: 'speed',
        type: 'property',
        regEx: /speed/
    }, {
        desc: 'number',
        type: 'value',
        regEx: /\d+/
    }
];

// just export the lexer function
module.exports = function (orbScript) {
    var tokens = [],
    tokenLen = langTokens.length,
    lines = orbScript.split(';');
    return lines.map(currentLine => {

        let lineTokens = currentLine.split(' ');

        return lineTokens.map((lexem) => {

            let i = 0,
            obj = {};
            while (i < tokenLen) {

                let t = langTokens[i];
                m = lexem.match(t.regEx);

                obj.lexem = lexem;
                if (m) {

                    obj.desc = t.desc;
                    obj.type = t.type;

                    break;
                }

                i += 1;
            }

            return obj;

        });
    });
};
