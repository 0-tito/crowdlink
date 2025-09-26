import web3 from "./web3";
import campaignFactory  from "./ethereum/build/campaignFactory.json"

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    "0x219311501DE016238328f2b901055471f5487262"
)
console.log(instance)
export default instance