const figlet = require('figlet')
const chalk = require('chalk')
const parseArgs = require('minimist')

const { createComponents } = require('./fs')

const asciiHeader = (() => {
    const asciiArt = figlet.textSync('RS', 'Basic')
    return chalk.magenta(asciiArt)
})()

const handleArgs = (args) => {
    const parsedArgs = parseArgs(args)
    Object.keys(parsedArgs).forEach(handleArg.bind(parsedArgs))
}

const handleArg = function(arg) {
    switch(arg) {
        case '_':
            handleKeywords(this._)
        break;
    }
}

const handleKeywords = (keywords) => {
    const validKeywords = ['component', 'reducer', 'store']
    if(validKeywords.includes(keywords[0])) {
        const names = keywords.slice(1)
        
        switch(keywords[0]) {
            case 'component':
                createComponents(names)
            break;
        }
    } else {
        console.log(`Unknown keyword "${keywords[0]}"!`)
    }
}

module.exports = (args) => {
    console.log(asciiHeader)
    handleArgs(args)
}