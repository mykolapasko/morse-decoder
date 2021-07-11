const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decode = expr => {

    const binaryWordsTable = {}

    Object.getOwnPropertyNames(MORSE_TABLE).forEach( propertyName => {
        let binaryPropertyName = ''
        switch (propertyName.length) {
            case 1:
                binaryPropertyName += '00000000'
                break;
            case 2:
                binaryPropertyName += '000000'
                break;
            case 3:
                binaryPropertyName += '0000'
                break;
            case 4:
                binaryPropertyName += '00'
                break;
            default:
                break;
        }

        propertyName.split('').forEach(letter => {
            switch (letter) {
                case '.':
                    binaryPropertyName += '10'
                    break;
                case '-':
                    binaryPropertyName += '11'
                    break;
                default:
                    break;
            }
        })

        binaryWordsTable[binaryPropertyName] = MORSE_TABLE[propertyName]
    })

    let words = expr.split('**********').map(word => {
        let chunks = [];
        for (let i = 0; i < word.length; i+= 10) {
            chunks.push(binaryWordsTable[word.substring(i, i + 10)]);
        }
        return chunks.join('')
    })

    return words.join(' ')

}

module.exports = {
    decode
}