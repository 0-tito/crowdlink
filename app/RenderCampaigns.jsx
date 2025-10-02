import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/add';
import { Box } from "@mui/material";
import Link from "next/link.js";
import generateCampaigns from '../util/generateCampaigns';
import CampaignListItem from '../components/CampaignListItem';
import factory from "../ethereum/foctory.js"

export default async function RenderCampaigns() {
    const campaigns = await generateCampaigns(factory)
    return (
        <>
            <Typography>open campaigns</Typography>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                sx={{ flexWrap: "wrap" }}
            >
                <Box sx={{ flex: 1, minWidth: "250px", maxWidth: "70%" }}>             
                    {campaigns.map(address => (
                         <CampaignListItem key={address} address={address}/>
                    ))}
                </Box>
                <Link href={"/Campaigns/New"}>
                    <Button variant="contained"
                        startIcon={<AddIcon />}
                        sx={{ alignSelf: "flex-start", mt: { xs: 2, sm: 0 } }}
                    >
                        create campaign
                    </Button> </Link>

            </Box>
        </>
    );
}
