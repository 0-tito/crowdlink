const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
// const { interface, bytecode } = require('./compile')
const compiledFactory = require("./build/campaignFactory.json")
//updated web3 and hdwallet-provider imports added for convenience

const provider = new HDWalletProvider(
    'multiply airport grace lumber six apple bean spot hope orbit ahead car',
    'https://sepolia.infura.io/v3/8e37cda2efbb43c5b9fe80ac05933711'
)
const web3 = new Web3(provider)
// deploy code will go here
 console.log(web3)
 
const deploy = async () =>  {
try{
      const  accounts = await web3.eth.getAccounts()
   
  console.log(`attempting to deploy from`, accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
   .deploy({data : compiledFactory.bytecode})
   .send({ gas: `1000000`, from: accounts[0]})

  console.log(`contract was deployed to`, result.options.address)
  provider.engine.stop()
} catch (error) {
    console.log(error)
}
}
deploy()