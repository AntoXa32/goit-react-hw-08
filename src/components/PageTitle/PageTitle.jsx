import { Typography } from "@mui/material";
import css from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return (
    <Typography variant="h2" className={css.heading}>
      {children}
    </Typography>
  );
}
