import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function ContactForm() {
  const dispatch = useDispatch();

  const FeedbackShema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackShema}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
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
            <Typography variant="h5" component="h1" gutterBottom>
              Add Contact
            </Typography>

            <Field name="name">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              )}
            </Field>

            <Field name="number">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Number"
                  type="text"
                  variant="outlined"
                  fullWidth
                  error={touched.number && Boolean(errors.number)}
                  helperText={touched.number && errors.number}
                />
              )}
            </Field>

            <Button type="submit" variant="contained" color="primary">
              Add Contact
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}