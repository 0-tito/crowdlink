import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
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
      <p style={{ margin: 0}}>crowd coin</p>

      <Box display="flex" alignItems="center" gap={2}>
        <Button variant="extended">campaigns</Button>
          <AddIcon />
        
      </Box>
    </Box>
  );
}
