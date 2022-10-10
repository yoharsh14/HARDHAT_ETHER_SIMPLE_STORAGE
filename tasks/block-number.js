const {task} = require("hardhat/config")

task("block-number","Prints teh current block number").setAction(
   // const blocktask = async function()=>{}
    //async function blockTask(){}
    //hre --> hardhat runtime environment
    async(taskArgs,hre)=>{
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block Number: ${blockNumber}`)
    }
)
module.exports={}