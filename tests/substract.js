const { expect } = require('chai');

const { substract } = require('../src/substract');

describe('Test The Add Function', () => {
  it('should failed when an input is undefined', () => {
    const sub = substract(1);
    expect(sub).to.be.equal(undefined);
  });

  it('should substract 2 numbers', () => {
    const sub = substract(3, 1);
    expect(sub).to.be.equal(2);
  });

})