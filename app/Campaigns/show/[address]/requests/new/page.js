import RenderRequestForm from "./renderRequestForm"
import Link from "next/link"
export default function page({params}){
    const {address} = params
    return <> 
        <h1> new request form </h1>
           <Link href={`/Campaigns/show/${address}/requests`}>Back</Link>
        <RenderRequestForm address={address} />
        </>
}