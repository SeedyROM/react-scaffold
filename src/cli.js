/**
 * @module cli
 */

const figlet = require('figlet')
const chalk = require('chalk')
const parseArgs = require('minimist')

const { createComponents } = require('./fs')

/** 
 * Immediately invokes an anonymous function to
 * generate some ASCii art.
*/
/* istanbul ignore next */
const asciiHeader = (() => {
    const asciiArt = figlet.textSync('RS', 'Basic')
    return chalk.magenta(asciiArt)
})()

/**
 * Parse the arguments with minimist and then call {@link handleArgs}.
 * @param {Array} args - A list of strings to be parsed.
 */
const handleArgs = (args) => {
    const parsedArgs = parseArgs(args)
    Object.keys(parsedArgs).forEach(handleArg.bind(parsedArgs))
}

/**
 * Switch over the current key from the parsed Array of arguments.
 * @param {String} key - Current key from the parsed Object.
 */
const handleArg = function(key) {
    switch(key) {
        case '_':
            handleKeywords(this._)
        break;
    }
}

/**
 * Validate the keyword list and run the appropriate action with the names
 * @param {Array} keywords - A list of keywords parsed from the CLI's arguments. 
 */
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

/**
 * The programs entry point.
 * @param {Array} args - List of arguments. 
 */
const run = (args, options) => {
    console.log(asciiHeader)
    handleArgs(args)
}

module.exports = {
    run,
    handleArgs,
    handleArg,
    handleKeywords,
}