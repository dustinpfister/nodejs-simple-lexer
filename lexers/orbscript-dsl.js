
const langTokens = [{
        desc: 'base',
        type: 'keyword',
        regEx: /base/
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

// return an array of token objects for the given text line
let lineToTokenObjects = (line, lineNum) => {
    let lineTokens = line.split(' '),
    col = 0,
    tokenLen = langTokens.length;
    return lineTokens.map((lexem, lineTokenIndex) => {
        let i = 0,
        obj = {};
        while (i < tokenLen) {
            let t = langTokens[i];
            m = lexem.match(t.regEx);
            obj.lexem = lexem;
            obj.position = {
                line: lineNum,
                col: col,
                token: lineTokenIndex
            };
            if (m) {
                obj.ltID = i + '-' + t.desc;
                obj.type = t.type;
                break;
            }
            i += 1;
        }
        col += lexem.length + 1;
        return obj;
    });
};

// just export the lexer function
module.exports = (orbScript) => {
    let tokens = [],
    lines = orbScript.split(';');
    return lines.map((currentLine, i) => {
        return lineToTokenObjects(currentLine, i);
    });
};
