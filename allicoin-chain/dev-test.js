const Block = require('./blockchain/block');

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());


//npm i jest = test