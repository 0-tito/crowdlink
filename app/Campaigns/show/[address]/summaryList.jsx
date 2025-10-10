"use client"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SummaryItem from './SummaryItem';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function SummaryList({summary}){
    return   <Grid container spacing={2}  sx={{ flexGrow: 1, minWidth: "275px", maxWidth: "80%" }}> 

        <Grid size={6} alignItems="stretch">
          <Item >
            <SummaryItem header={summary.manager}
              meta={"Address of Manager"}
              description={"the manager created this campaign and can create requests to withdraw money"} />
          </Item>
        </Grid>

        <Grid size={6} >
          <Item>
            <SummaryItem header={summary.requestsCount}
              meta={"Number of requests"}
              description={"A request tries to with draw money from the contract"} />
          </Item>
        </Grid>

        <Grid size={6}>
          <Item><SummaryItem header={summary.balance}
            meta={"Campaign balance(Ether"}
            description={"The balance is how much money the campaign has left to spend"} />
          </Item>
        </Grid>

        <Grid size={6}>
          <Item><SummaryItem header={summary.minimumContribution}
            meta={"minimum contribution (wei)"}
            description={"you must contribute at least this much wei to become an approver"} />
          </Item>
        </Grid>

        <Grid size={6}>
          <Item><SummaryItem header={summary.approversCount}
            meta={"Number of approvers"}
            description={"Number of people who have already donated to this campaign"} />
          </Item>
        </Grid>
      </Grid>
}