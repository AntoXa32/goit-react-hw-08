import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { Grid, Box } from "@mui/material";
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 2 }}>
      <Grid container spacing={2}>
        {contacts.map((contact) => (
          <Grid item xs={12} sm={6} key={contact.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: 1,
              }}
            >
              <Contact contact={contact} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
