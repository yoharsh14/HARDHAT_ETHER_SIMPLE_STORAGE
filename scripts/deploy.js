//imports

const { Contract } = require("ethers")
const { ethers, run, network } = require("hardhat")
const EHTERSCAN_API_KEY = process.env.EHTERSCAN_API_KEY
//async main
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("DEPLOYING CONTRACT _____________")
    const SimpleStorage = await SimpleStorageFactory.deploy()
    await SimpleStorage.deployed()
    console.log(`Deployed contract to ${SimpleStorage.address}`)
    // what happend when we deploy to our hardhat network???
    4 == 4 //->true
    4 == "4" //->true
    4 === "4" //->false
    console.log(network.config.chainId);
    if (network.config.chainId == 5) {
        console.log("Waiting for block conformation....")
        await SimpleStorage.deployTransaction.wait(6)
        await verify(SimpleStorage.address, [])
    }

    const currentValue = await SimpleStorage.retrieve()
    console.log(`current value is ${currentValue.toString()}`)

    ///update current valeu
    const transactionResponse = await SimpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await SimpleStorage.retrieve()
    console.log(`Updated value: ${updatedValue.toString()}`)
}

async function verify(contractAddress, args) {
    console.log("Verifying Contract....")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}
//main
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
