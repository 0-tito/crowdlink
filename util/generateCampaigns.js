export default async function generateCampaigns(factory) {
    const campaigns = []
    let index = 0
    try {
        while (true) {
            let campaign = await factory.methods.deployedCampaigns(index).call();
            if (!campaign) break; // stop if undefined
            campaigns.push(campaign)
            index++
        }
    } catch (error) {
        console.log(error)
    }
    return campaigns
}