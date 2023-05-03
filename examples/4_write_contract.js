const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

const sender = ''
const receiver = ''

const privateKey = ''
const wallet = new ethers.Wallet(privateKey, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns(uint)",
    "function transfer(address to, uint amount) returns(bool)",
];

const address = '0x4A525d67711028Ae1b6333fCbBeb50522fCE20E2'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balanceSenderBefore = await contract.balanceOf(sender)
    const balanceReceiverBefore = await contract.balanceOf(receiver)

    console.log(`Transferring from --> ${sender} \nBalance before transfer ${balanceSenderBefore}`)
    console.log(`Transferring to -->${receiver} \nBalance before transfer ${balanceReceiverBefore}`)

    const contractWithWallet = contract.connect(wallet)

    const balance = 10

    const txn = await contractWithWallet.transfer(receiver, balance)

    await txn.wait()

    console.log(txn)

    const balanceSenderAfter = await contract.balanceOf(sender)
    const balanceReceiverAfter = await contract.balanceOf(receiver)

    console.log(`Transferred from --> ${sender} \nBalance before transfer ${balanceSenderAfter}`)
    console.log(`Transferred to -->${receiver} \nBalance before transfer ${balanceReceiverAfter}`)

    
}

main()