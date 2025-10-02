import generateCampaignSummary from "../../../../util/generateCampaignSummary.js"
import { Typography } from "@mui/material"
import RenderSummary from "./RenderSummary.jsx"
import Campaign from "../../../../ethereum/campaign.js"


export default async function page({ params }){
  const { address } = await  params
  const campaign = Campaign(address)
   const summary = await generateCampaignSummary(campaign)
   console.log(summary)
  return <>
    <Typography fontWeight={"700"}>campaign show</Typography>
     <RenderSummary summary={summary} address={address} /> 
  </>
}
