import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilterName } from "../../redux/filters/selectors";
import { Box, TextField, Typography } from "@mui/material";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterName);

  const onFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "0 auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" component="p">
        Find contacts by name or phone number
      </Typography>
      <TextField
        type="text"
        value={value}
        onChange={onFilter}
        label="Search"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
}
