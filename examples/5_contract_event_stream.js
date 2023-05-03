const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns(string)",
    "function symbol() view returns(string)",
    "function totalSupply() view returns(uint256)",
    "function balanceOf(address) view returns(uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const address = '0x4A525d67711028Ae1b6333fCbBeb50522fCE20E2'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const block = await provider.getBlockNumber()

    // const transferEvents = await contract.queryFilter('Transfer', block -100 ,block)
    const transferEvents = await contract.queryFilter('Transfer', 8923519, 8923520)

    console.log(transferEvents)

}

main()