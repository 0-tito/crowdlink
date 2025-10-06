"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Box, Typography, OutlinedInput, InputAdornment, CircularProgress, Button } from "@mui/material"
import RequestFormErrorField from "./RequestFormErrorField";
import Link from "next/link";

const requestFormSchema = z.object({
    description: z.string().min(1, "Request description cannot be empty"),
    value: z.string().min(1,"value most be added"),
    recipient: z.string().min(1,"reccipient address is needed")
})

const outlinedInputStyles = {
    root: {
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

    }
}

export default function RequestForm({onSubmit,errorMessage,loading}) {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: zodResolver(requestFormSchema)
        })
        
    const {description,value,recipient} = errors
    return (
        <Box component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography>description</Typography>
            <OutlinedInput endAdornment={<InputAdornment position="end">description</InputAdornment>}
                {...register("description")}
                sx={outlinedInputStyles.root}
            />
            {(description?.message ) && (<RequestFormErrorField zodErrorMsg={description?.message}  />)}

            <OutlinedInput endAdornment={<InputAdornment position="end">value</InputAdornment>}
                {...register("value")}
                sx={outlinedInputStyles.root}
            />
            {(value?.message ) && (<RequestFormErrorField zodErrorMsg={value?.message}  />)}

            <OutlinedInput endAdornment={<InputAdornment position="end">recipient</InputAdornment>}
                {...register("recipient")}
                sx={outlinedInputStyles.root}
            />
            {(recipient?.message || errorMessage) && (<RequestFormErrorField zodErrorMsg={recipient?.message} errorMessage={errorMessage} />)}
            <Button type="submit" loading={loading} variant="contained" sx={{
                width: "40%",
                "&.Mui-disabled": {
                    bgcolor: "rgba(21, 129, 211, 1)",
                },
            }}
                loadingIndicator={<CircularProgress size={20} sx={{ color: "white" }} />}>
                Create!!
            </Button>
        </Box>)
}