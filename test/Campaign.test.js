const assert = require("assert");
const { Web3 } = require("web3");
const ganache = require("ganache");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/campaignFactory.json")
const compiledCampaign = require("../ethereum/build/Campaign.json")
let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    //make web3 aware of a contract with this abi/interface
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode }) // deploy the transaction
        .send({ from: accounts[0], gas: "1000000" }); // send actual contract transaction


    await factory.methods.createCampaign("100").send({
        from: accounts[0],
        gas: "1000000"
    });

    // get campaign address from factory
    [campaignAddress] = await factory.methods.getDeployedContracts().call();

    //use web3 to access deployed campaign with the campaign address
    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),
        campaignAddress);
});

describe("campaign", () => {
    // it("deploys factory and campaign", () => {
    //     assert.ok(factory.options.address);
    //     assert.ok(campaign.options.address);
    // })

    // it("sets caller as the manager", async () => {
    //     const manager = await campaign.methods.manager().call();
    //     assert.equal(accounts[0], manager);
    // })

    // it("allows people to contribute money and marks them as approvers", async () => {
    //     await campaign.methods.contribute().send({
    //         value: "201",
    //         from: accounts[1]
    //     });
    //     const isContributor = await campaign.methods.approvers(accounts[1]).call();
    //     assert(isContributor)
    // });

    // it("requires a minumum contribution", async () => {
    //     try {
    //         await campaign.methods.contribut().send({
    //             value: "5",
    //             from: accounts[1]
    //         });
    //         // if execution passes the try block,test automatically fails
    //         assert(false);
    //     } catch (error) {
    //         assert(error);
    //     }
    // })

    // it("allows a manager to make a payment request", async () => {
    //     await campaign.methods.createRequest("buy batteries", "100", accounts[1])
    //         .send({ from: accounts[0], gas: "1000000" });

    //     const request = await campaign.methods.requests(0).call();
    //     assert.equal("buy batteries", request.description);
    // })

    // it("processes requests", async () => {
    //     await campaign.methods.contribute().send({
    //         from: accounts[0],
    //         value: web3.utils.toWei("10", "ether")
    //     });

    //    console.log("no error yet")
    //     await campaign.methods.createRequest("a", web3.utils.toWei("5", "ether"), accounts[0])
    //         .send({ from: accounts[0], gas: "1000000" });

    //     await campaign.methods.approveRequest(0).send({
    //         from: accounts[0], gas: "1000000"
    //     });

    //     await campaign.methods.finalizeRequest(0).send({
    //         from : accounts[0], gas: "1000000"
    //     });

    //     let balance = await web3.eth.getBalance(accounts[1]);
    //     balance = web3.utils.fromWei(balance, "ether");
    //     balance = parseFloat(balance);
    //     assert(balance > 104);
    // })

    it("fails if who is not a contributor tries to approve a request", async () => {
        try {
            await campaign.methods.contribute().send({
                value: "100",
                from : accounts[0]
            })
            await campaign.methods.createRequest("tomato", "10", accounts[0]).send({
                from: accounts[0],
                gas: "1000000"
            });
              await campaign.methods.approveRequest(0).send({
                from:accounts[0],
                gas: "1000000"
              });

              assert(false)
        }
        catch (error) {
         assert(error)
        }
    })
})