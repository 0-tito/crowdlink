"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import web3 from "../web3";
import Campaign from "../ethereum/campaign";

export default function RequestsTableClient({ requests, approversCount, address }) {
  const campaign = Campaign(address);

  async function onApprove(index) {
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequest(index).send({
        from: accounts[0],
      });
      alert(`Request ${index} approved successfully!`);
    } catch (err) {
      console.error("Error approving request:", err);
    }
  }
async function onFinalize(index){
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.finalizeRequest(index).send({
        from: accounts[0],
      });
      alert(`Request ${index} approved successfully!`);
    } catch (err) {
      console.error("Error approving request:", err);
    }
}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="requests table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Recipient</TableCell>
            <TableCell align="right">Approval Count</TableCell>
            <TableCell align="right">Approve</TableCell>
              <TableCell align="right">finalize</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell align="right">{request.description}</TableCell>
              <TableCell align="right">{web3.utils.fromWei(request.value, "ether")}</TableCell>
              <TableCell align="right">{request.recipient}</TableCell>
              <TableCell align="right">
                {request.approvalCount} / {approversCount}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined" color="success"
                  onClick={() => onApprove(index)}
                >
                  Approve
                </Button>
              </TableCell>
                            <TableCell align="right">
                <Button
                  variant="outlined" sx={{ color: "teal"}}
                  onClick={() => onFinalize(index)}
                >
                  finalize
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
