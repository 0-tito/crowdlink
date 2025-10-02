export default async function generateCampaignSummary(campaign) {
    const campaignSummary = await campaign.methods.getSummary().call()

    const summary = {
        minimumContribution: campaignSummary[0].toString(),
        balance: campaignSummary[1].toString(),
        requestsCount: campaignSummary[2].toString(),
        approversCount: campaignSummary[3].toString(),
        manager: campaignSummary[4]
    }
    return summary
}