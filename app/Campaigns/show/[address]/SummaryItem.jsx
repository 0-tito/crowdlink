import { Typography, Box, CardContent , Card } from "@mui/material";


export default function SummaryItem({ header, meta, description }) {
  return (
    <>
      <Typography
        variant="h6"
        align="left"
        sx={{
          wordWrap: "break-word",
          fontWeight:"800",
           alignSelf: "flex-end" ,
        }}
      >
        {header}
      </Typography>

      <Typography
        variant="subtitle2"
        color="lightgrey"
        sx={{ wordWrap: "break-word" }}
      >
        {meta}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {description}
      </Typography>
    </>
  );
}
