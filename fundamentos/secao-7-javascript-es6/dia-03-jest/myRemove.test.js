const myRemove = require('./myRemove.js');

describe('removendo números de um array', () => {
  it('remover 3', ()=> {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
});
describe('removendo números de um array', () => {
  it('remover 3', ()=> {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
});describe('removendo números de um array', () => {
  it('remover 3', ()=> {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
});