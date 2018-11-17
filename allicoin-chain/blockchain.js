const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock(data) {
        //represents last block
        const block = Block.mineBlock(this.chain[this.chain.length-1], data);
        this.chain.push(block);

        return block;
    }

    isValidChain(chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

        for(let i=1; i<chain.length; i++) {
            const block = chain[i];
            const lastBlock = chain[i-1];

            if(block.lastHash !== lastBlock.hash || 
                block.hash !== Bloock.blackHash(block)) {
                return false;
            }
        }

        return true;
    }

    replaceChain(newChain) {
        if(newChain.length <= this.chain.length) {
            console.log('Recieved chain is not longer than th e current chain.');
            return;
        }
    }
}

module.exports = Blockchain;