import web3 from "../web3"
import CampaignJson from "../ethereum/build/Campaign.json"


export default (address) => {
   return new web3.eth.Contract(
    JSON.parse(CampaignJson.interface),
    address 
)
}