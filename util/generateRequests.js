export default async function generateRequests(campaign) {
    try {
        const requestsCount = await campaign.methods.getRequestCount().call()
        const approversCount = await campaign.methods.approversCount().call()  
        const requests = await Promise.all(
            Array(parseInt(requestsCount)).fill().map((element, index) => {
                return campaign.methods.requests(index).call()
            }))
            const serializedRequests = requests.map(request => ({
                description : request.description,
                value : request.value.toString(),
                recipient: request.recipient,
                complete: request.complete,
                approvalCount: request.approvalCount.toString()
            }))
            console.log(serializedRequests)
            return { requestsCount, serializedRequests , approversCount}
    } catch (error) {
      console.log(error.message)
    }
}