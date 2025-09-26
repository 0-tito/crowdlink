"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { TextField, Button, Box, Typography } from "@mui/material"

import InputAdornment from '@mui/material/InputAdornment';
import factory from "../../../foctory.js"
import web3 from "../../../web3"
import { useState } from "react"
// import NewCampaignForm from "../../../components/NewCampaignForm"


const schema = z.object({
  minimumContribution: z.coerce.number().min(18, "you need to send at least 18 wei"),
})

export default function NewCampaign() {
  const [errorMessage,setErrorMessage] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })
 console.log(errors)

  const onSubmit = async (userInput) => {
    console.log("form data", userInput)
    try {
     const account = await web3.eth.getAccounts();
    await factory.methods.createCampaign(userInput.minimumContribution)
      .send({
        from: account[0]
      })
    } catch (error) {
      setErrorMessage(error.message)
    }

  }

  return (
    <>
      {/* <NewCampaignForm /> */}
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2, flexWrap: "wrap" , width:"100%"}}
      >
        
           <Typography fontWeight={"900"}>Create a Campaign</Typography>

        <Typography>minimum contribution</Typography>
        <TextField
          type="number"
          {...register("minimumContribution")}
          error={!!errors.minimumContribution || !!errorMessage}
          helperText={errors.minimumContribution?.message || errorMessage }
          
          sx={{
             minWidth: "250px",
            "& .MuiInputBase-input": {
              height: 16,       // inner input height
              fontSize: "1.2rem",
              width: "100%",
              bgcolor: "white"
            },
            "& .MuiOutlinedInput-root": {
              bgcolor: "lightgrey",
              display: "flex",
              justifyContent: "space-between",
            },
            "& input[type=number]": {
              MozAppearance: "textfield", // Firefox
            },
            "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
              WebkitAppearance: "none", // Chrome, Safari, Edge
              margin: 0,
            },

          }}
          slotProps={{
            input: {
              endAdornment: (<InputAdornment
                position="end"
              >wei</InputAdornment>),
            },

          }}
        />

        <Button type="submit" variant="contained" sx={{ width: "20%" }}>
          Create!!
        </Button>
      </Box>
    </>
  )
}


