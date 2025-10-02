"use client"
import { Grid,Button } from '@mui/material';
import SummaryList from './summaryList';
import ContribueForm from '../../../../components/ContributeForm';
import web3 from '../../../../web3';
import Campaign from "../../../../ethereum/campaign";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import Link from 'next/link';



export default function RenderSummary({ summary,address }) {
        const router = useRouter()
        const [loading ,setLoading ] = useState(false)
       const [errorMessage,setErrorMessage] = useState("")
async function onSubmit(userInput){
    try {
        setLoading(true)
        setErrorMessage("")
      const accounts = await web3.eth.getAccounts()
      const campaign = Campaign(address)
      console.log(accounts)
      await campaign.methods.contribute().send({
        from:accounts[0],
        value: web3.utils.toWei(userInput.minimumContribution, "ether")
      })
      router.refresh()
      setLoading(false)
    } catch (error) {
     setErrorMessage(error.message)
     setLoading(false)
    }
}

  return (
    <Grid container spacing={3} >
      {/* Left column: SummaryList */}
      <Grid size={{ sm: 7, md: 8 }}>
        <SummaryList summary={summary} />
      </Grid>

      {/* Right column: ContributeForm */}
      <Grid size={{ sm: 3, md: 4 }}>
        <ContribueForm onSubmit={onSubmit} loading={loading} errorMessage={errorMessage}/>
      </Grid>
      <Grid size={3}> 
       <Link href={`/Campaigns/requests`} >
  <Button size="small" variant="contained">view requests</Button>
</Link>
      </Grid>
    </Grid>)
}