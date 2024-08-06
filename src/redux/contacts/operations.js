import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      toast.error("Could not load contacts");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      toast.success("Contact successfully added");
      return response.data;
    } catch (error) {
      toast.error("Could not load contacts");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success("Contact successfully added");
      return response.data;
    } catch (error) {
      toast.error("Could not load contacts");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, updatedContact }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, updatedContact);
      toast.success("Contact successfully added");
      return response.data;
    } catch (error) {
      toast.error("Could not load contacts");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);