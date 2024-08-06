import { AppBar, Toolbar, Container } from "@mui/material";
import AppBarContent from "../AppBar/AppBarContent";

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <AppBarContent />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
