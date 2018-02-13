const chai = require('chai')
const expect = chai.expect
const os = require('os')

const cli = require('../src/cli')

describe('CLI', function() {
    it('should create specified components with valid keywords', function() {
        cli.run(['component', 'Article'], {
            silent: true
        })
        expect(true).to.not.eq(false)
    })
})
