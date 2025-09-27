import { Button, Typography, Box, OutlinedInput } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import useCampaignForm from "./hooks/useCampaignForm";
import {FormControl,FormHelperText} from "@mui/material";

export default function NewCampaignForm({errorMessage,onSubmit}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useCampaignForm()



  return (
    <Box component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography>minimum contribution</Typography>
      <OutlinedInput  endAdornment={<InputAdornment position="end">wei</InputAdornment>}
           {...register("minimumContribution")}
        sx={{
          bgcolor: "lightGrey",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
         "& .MuiInputBase-input": {
              height: 17,       // inner input height
              fontSize: "1.2rem",
            },
          "& .MuiOutlinedInput-input": {
            width: "86%",
            bgcolor: "white",
          }

        }}

      />
      {(errors.minimumContribution || errorMessage) && 
     ( <Typography>{errors.minimumContribution?.message || errorMessage}</Typography>)} 
      <Button type="submit" variant="contained" sx={{ width: "20%" }}>
        Create!!
      </Button>
    </Box>
);

} 

{/* <Box component="form" onSubmit={handleSubmit(onSubmit)}>
  <Typography>Minimum Contribution</Typography>

  <FormControl error={!!errors.minimumContribution || !!errorMessage}>
    <OutlinedInput
      {...register("minimumContribution")}
      endAdornment={<InputAdornment position="end">wei</InputAdornment>}
      sx={{
        bgcolor: "lightGrey",
        "& .MuiInputBase-input": {
          height: 17,
          fontSize: "1.2rem",
        },
        "& .MuiOutlinedInput-input": {
          width: "86%",
          bgcolor: "white",
        },
      }}
    />
    {(errors.minimumContribution || errorMessage) && (
      <FormHelperText>
        {errors.minimumContribution?.message || errorMessage}
      </FormHelperText>
    )}
  </FormControl>

  <Button type="submit" variant="contained" sx={{ width: "20%" }}>
    Create!!
  </Button>
</Box> */}



