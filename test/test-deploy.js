const { ethers } = require("hardhat")
const { expect, assert } = require("chai")
const { constants } = require("ethers")
describe("SimpleStorage", () => {
    //let simpleStorageFactory
    //let simpleStorage
    let simpleStorageFactory, simpleStorage
    beforeEach(async () => {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    }),
        it("Should start with a favorite number of 0", async function () {
            const currentValue = await simpleStorage.retrieve()
            const expectedValue = "0"
            //assert
            //expect
            assert.equal(currentValue.toString(), expectedValue)
            // expect(currentValue.toString()).to.equal(expectedValue) other ways to test
        })
    it("Should update when we call store", async () => {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("Should add person when name and favorite number is passed", async () => {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.addPerson("harsh", "7")
        await transactionResponse.wait(1)
        const currentValue = await simpleStorage.viewPerson("harsh")
        assert.equal(currentValue.toString(), expectedValue)
    })
})
