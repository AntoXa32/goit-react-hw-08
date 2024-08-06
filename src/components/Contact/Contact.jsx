import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "@mui/material/Modal";
import { Button, Typography, Box } from "@mui/material";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <div className={css.contacts}>
        <p className={css.icon}>
          <BsFillPersonFill />
          {contact.name}
        </p>
        <p className={css.icon}>
          <BsFillTelephoneFill />
          {contact.number}
        </p>
      </div>
      <Button
        variant="contained"
        color="error"
        onClick={() => setIsModalOpen(true)}
      >
        DELETE
      </Button>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="confirm-delete-title"
        aria-describedby="confirm-delete-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="confirm-delete-title" variant="h6" component="h2">
            Are you sure you want to delete this contact?
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
              sx={{ mr: 2 }}
            >
              Yes, delete
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
