
var greet = require('../index.js')
describe('greet', function(){
  it("is a dummy success case", function(){
    expect(1).to.eql(1);
  });
  it("should greet a person by name", function(){
    expect(greet('Gaolz')).to.eq('hello, Gaolz');
  });
  it("should greet a person flirtatiously if drunk", function(){
    expect(greet('Gaolz', true)).to.eq('hello Gaolz, what a sunny day!');
  });
});
