import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <Box
      className={css.container}
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
