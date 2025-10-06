import Link from "next/link";
import { Button } from "@mui/material";

export default function page({ params }){
    const { address } = params
    console.log(address)
return <>
<h3> requests route </h3>
<Link href={`/Campaigns/show/${address}/requests/new`}>
        <Button variant="contained">create requests!!</Button>
    </Link>
</>
}