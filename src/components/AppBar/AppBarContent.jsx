import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Box } from "@mui/material";

export default function AppBarContent() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Navigation />
      <Box sx={{ flexGrow: 1 }} />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
}
