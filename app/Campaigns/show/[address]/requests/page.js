import Link from "next/link";
import { Button } from "@mui/material";
import Campaign from "../../../../../ethereum/campaign";
import generateRequests from "../../../../../util/generateRequests";
import dynamic from "next/dynamic";
import ClientRequestsWrapper from "./ClientRequestWrapper";

export default async function Page({ params }) {
  const { address } = await params;
  const campaign = Campaign(address);
  const requests = await generateRequests(campaign);

  return (
    <>
      <h3>Requests Route</h3>
      <Link href={`/Campaigns/show/${address}/requests/new`}>
        <Button variant="contained">Add Request</Button>
      </Link>
      <ClientRequestsWrapper
        requests={requests.serializedRequests}
        address={address}
        approversCount={requests.approversCount}
      />
    </>
  );
}
