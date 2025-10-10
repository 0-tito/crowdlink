import web3 from "../web3";
import campaignFactory  from "./build/campaignFactory.json"

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    "0xAB3C17bd8Fa0d557Da14b41049C1dA5ae410F572"
)
console.log(instance)
export default instance