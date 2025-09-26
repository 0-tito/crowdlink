// app/campaignList.jsx
import factory from "../foctory.js";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/add';
import { Box } from "@mui/material";

async function generateCampaignList() {
    const campaigns = []
    let index = 0
    try {
        while (true) {
            let campaign = await factory.methods.deployedCampaigns(index).call();
            if (!campaign) break; // stop if undefined
            campaigns.push(campaign)
            index++
        }
    } catch (error) {
        console.log(error)
    }
    return campaigns
}


export default async function renderCampaigns() {
    const campaigns = await generateCampaignList()
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
                    {campaigns.map(campaign => (
                        <Card key={campaign} sx={{ mb: 2, }}>
                            <CardContent>
                                <Typography variant="h5" sx={{
                                    fontSize: { xs: "0.5rem", sm: "1rem", md: "1.3rem" }
                                }}>
                                    {campaign}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">view campaigns</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{ alignSelf: "flex-start", mt: { xs: 2, sm: 0 } }}
                >
                    create campaign
                </Button>
            </Box>

            {/* <Box  display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start" width={"auto"}>
                <Box >
                    {campaigns.map(campaign => (
                        <Card key={campaign} sx={{ mb: 2 }}  width="auto">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {campaign}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">view campaigns</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
                <Button variant="contained" startIcon={<AddIcon />} >
                    create campaign
                </Button>
         </Box> */}
        </>
    );
}
