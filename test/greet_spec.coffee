greet = require("../lib/index.js")
describe 'greet', ->

  it "should greet a person by name", ->
    expect(greet('Gaolz')).to.eql 'hello, Gaolz'

  it "should greet a person flirtatiously if drunk", ->
    expect(greet('Gaolz', true)).to.eql 'hello, Gaolz what a sunny day!'
