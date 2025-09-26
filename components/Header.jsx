import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Header() {
  return (
    <Box
      component="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={"5%"}
    >
      <p style={{ margin: 0, fontWeight: "bold" }}>crowd coin</p>

      <Box display="flex" alignItems="center" gap={2}>
        <Fab variant="extended">campaigns</Fab>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
}
