import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button, Typography, Box, OutlinedInput } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';


const schema = z.object({
  minimumContribution: z.coerce.number().min(18, "you need to send at least 18 wei"),
})


export default function NewCampaignForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log("form data", data)
  }

  return (
    <Box component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography>minimum contribution</Typography>
      <OutlinedInput  endAdornment={<InputAdornment position="end">wei</InputAdornment>}
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
        {...register("minimumContribution")}

      />
      {errors.minimumContribution && <Typography>{errors.minimumContribution.message}</Typography>}
      <Button type="submit" variant="contained" sx={{ width: "20%" }}>
        Create!!
      </Button>
    </Box>
  );
}



