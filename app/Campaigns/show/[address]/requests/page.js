import Link from "next/link";
import { Button } from "@mui/material";
import Campaign from "../../../../../ethereum/campaign";

export default function page({ params }){
    const { address } = params
    console.log(address)
    const camapign = Campaign(address)
    
return <>
<h3> requests route </h3>
<Link href={`/Campaigns/show/${address}/requests/new`}>
        <Button variant="contained">add requests!!</Button>
    </Link>
</>
}