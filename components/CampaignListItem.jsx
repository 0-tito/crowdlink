"use client"
import { useRouter } from "next/navigation";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link.js";
import Card from '@mui/material/Card';


export default function CampaignListItem({address}) {
      const router = useRouter()
   return    <Card sx={{ mb: 2, }}>
             <CardContent>
            <Typography variant="h5" sx={{ fontSize: { xs: "0.5rem", sm: "1rem", md: "1.3rem" } }}>
                {address}
            </Typography>
        </CardContent>
        <CardActions>
            <Link href={`/Campaigns/show/${address}`} passHref>  <Button size="small" onClick={() => {
            }}>view campaign</Button> </Link>
        </CardActions> 
         </Card>
}