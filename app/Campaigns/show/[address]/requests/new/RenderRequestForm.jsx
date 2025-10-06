"use client"
import { use, useState } from "react";
import RequestForm from "../../../../../../components/RequestForm";
import Campaign from "../../../../../../ethereum/campaign";
import web3 from "../../../../../../web3";
import { useRouter } from "next/navigation"

export default function RenderRequestForm({address}){
const [errorMessage,setErrorMessage] = useState("")
const [loading, setLoading] = useState(false)
const router = useRouter()

 async function onSubmit({description,value,recipient}){
     const campaign = Campaign(address)
     console.log(description)
    try {
        setLoading(true)
        setErrorMessage("")
        const accounts = await web3.eth.getAccounts()
        await campaign.methods.createRequest(description,web3.utils.toWei(value, "ether"),recipient).send({
            from:accounts[0]
        })
        router.push(`/Campaigns/show/${address}/requests`)
        setLoading(false)
    } catch (error) {
       setErrorMessage(error.message)
    }
    setLoading(false)
  }
   return (
   <> 
   
    <RequestForm  onSubmit={onSubmit} errorMessage={errorMessage} loading={loading} />
    </> 
   )
}