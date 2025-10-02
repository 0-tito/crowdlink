import { Button, Typography, Box, OutlinedInput } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import useCampaignForm from "./hooks/useCampaignForm";
import { CircularProgress } from "@mui/material";

export default function ContribueForm({ minimumContribution, errorMessage, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useCampaignForm(minimumContribution)



  return (
    <Box component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography>send some ether to become an approver</Typography>
      <OutlinedInput endAdornment={<InputAdornment position="end">ether</InputAdornment>}
        {...register("minimumContribution")}
        sx={{
          bgcolor: "lightGrey",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          "& .MuiInputBase-input": {
            height: 17,       // inner input height
            fontSize: "1.rem",
          },
          "& .MuiOutlinedInput-input": {
            width: "86%",
            bgcolor: "white",
          }

        }}

      />
      {(errors.minimumContribution || errorMessage) &&
        (
          <Box sx={{
            border: 1,
            borderColor: "red",
          }}>   <Typography color="red" bgcolor="rgba(250, 239, 239, 1)" padding="5px" fontWeight={"600"}>
              OOPS!!
            </Typography>
            <Typography color="red" bgcolor="rgba(250, 239, 239, 1)" padding="5px">
              {errors.minimumContribution?.message || errorMessage}
            </Typography> </Box>)}
      <Button type="submit" loading={loading} variant="contained" sx={{
        width: "40%",
        "&.Mui-disabled": {
          bgcolor: "rgba(21, 129, 211, 1)",
        },
      }}
        loadingIndicator={<CircularProgress size={20} sx={{ color: "white" }} />}>
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



