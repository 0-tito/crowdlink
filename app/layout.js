import Header from "../components/Header"
import { Box } from "@mui/material";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Box maxWidth={"85%"} margin={"auto"}>
        <Header />
        <main>  {children} </main>
        </Box>
      </body>
    </html>
  )
}