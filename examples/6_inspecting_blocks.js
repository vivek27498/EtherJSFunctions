const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {
    const blockNumber = await provider.getBlockNumber()

    console.log(`Latest Block Number --> ${blockNumber}`)

    const blockDetails = await provider.getBlock(blockNumber)

    console.log(blockDetails)

    const { transactions } = await provider.getBlockWithTransactions(blockNumber)

    console.log(`First transaction in the block --> \n${JSON.stringify(transactions[0])}`)
    console.log(transactions[1])
}

main()