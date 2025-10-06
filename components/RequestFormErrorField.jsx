import { Typography,Box } from "@mui/material"

export default function RequestFormErrorField({zodErrorMsg,errorMessage = ""}) {
  return  <Box sx={{
        border: 1,
        borderColor: "red",
    }}>   <Typography color="red" bgcolor="rgba(250, 239, 239, 1)" padding="5px" fontWeight={"600"}>
            OOPS!!
        </Typography>
        <Typography color="red" bgcolor="rgba(250, 239, 239, 1)" padding="5px">
            {zodErrorMsg || errorMessage}
        </Typography> </Box>
}