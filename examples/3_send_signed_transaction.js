const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const sender = ''
const receiver = ''

const privateKey = ''
const wallet = new ethers.Wallet(privateKey, provider)

const main = async () => {

    const senderBefore = await provider.getBalance(sender)
    const receiverBefore = await provider.getBalance(receiver)

    console.log(`Sender Balance before --> ${ethers.utils.formatEther(senderBefore)}`)
    console.log(`Receiver Balance before --> ${ethers.utils.formatEther(receiverBefore)}`)

    const txn = await wallet.sendTransaction({
        to: receiver,
        value: ethers.utils.parseEther("0.025")
    })

    await txn.wait()
    console.log(txn)

    const senderAfter = await provider.getBalance(sender)
    const receiverAfter = await provider.getBalance(receiver)

    console.log(`Sender Balance After --> ${ethers.utils.formatEther(senderAfter)}`)
    console.log(`Receiver Balance After --> ${ethers.utils.formatEther(receiverAfter)}`)

}

main()