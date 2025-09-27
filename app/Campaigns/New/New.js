"use client"
import { TextField, Button, Box, Typography } from "@mui/material"
import factory from "../../../foctory.js"
import web3 from "../../../web3"
import { useState } from "react"
import textFieldStyles from "./textFieldStyles.js"
import { campaignTextFieldSlots } from "./textFieldSlots.js"
import useCampaignForm from "../../../components/hooks/useCampaignForm.jsx"

import NewCampaignForm from "../../../components/NewCampaignForm"

export default function NewCampaign() {
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useCampaignForm()
  console.log(errors)

  const onSubmit = async (userInput) => {
    console.log("form data", userInput)
    setLoading(true)
    setErrorMessage("")
    try {
      const account = await web3.eth.getAccounts();
      await factory.methods.createCampaign(userInput.minimumContribution)
        .send({
          from: account[0]
        })
    } catch (error) {
      setErrorMessage(error.message)
    }
setLoading(false)
  }

  return (
    <>
      {/* <NewCampaignForm  errorMessage={errorMessage} onSubmit={onSubmit}/> */}
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2, flexWrap: "wrap", width: "100%" }}
      >

        <Typography fontWeight={"900"}>Create a Campaign</Typography>

        <Typography>minimum contribution</Typography>
        <TextField
          type="number"
          {...register("minimumContribution")}
          error={!!errors.minimumContribution || !!errorMessage}
          helperText={
            errors.minimumContribution?.message || errorMessage
              ? `OOPS \n ${errors.minimumContribution?.message || errorMessage}`
              : ""
          }
          sx={textFieldStyles.root}
          slotProps={campaignTextFieldSlots()}
        />

        <Button loading={loading} type="submit" variant="contained" sx={{ width: "20%" }}>
          Create!!
        </Button>
      </Box>
    </>
  )
}


