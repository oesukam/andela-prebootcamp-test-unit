const { expect } = require('chai');

const { add } = require('../src/add');

describe('Test The Add Function', () => {
  it('should failed when there is only one input', () => {
    const sum = add(1);
    expect(sum).to.be.equal(undefined);
  });

  it('should failed when there are invalid input', () => {
    const sum = add(1, undefined);
    expect(sum).to.be.equal(undefined);
  });

  it('should add 2 numbers', () => {
    const sum = add(1, 2);
    expect(sum).to.be.equal(3);
  });

  it('should add 3 numbers', () => {
    const sum = add(1, 2, 3);
    expect(sum).to.be.equal(6);
  });
})