"use client"
import Box from '@mui/material/Box';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
export default function Header() {
  return (
    <Box
      component="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={"5%"}
    >
      <Link href={"/"}> <Button style={{ margin: 0, color:"black"}}>crowd coin</Button> </Link>

      <Box display="flex" alignItems="center" gap={2}>
        <Link href={"/"}> <Button variant="extended" sx={{color:"black"}} >campaigns</Button> </Link>
         <Link href={"/Campaigns/New"}> <AddIcon color='black' /> </Link>
      </Box>
    </Box>
  );
}
