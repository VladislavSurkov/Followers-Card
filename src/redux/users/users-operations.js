import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://648acfd517f1536d65e9bc3e.mockapi.io/api/v1/";

export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    return alert(error.message);
  }
});

export const updateUsers = createAsyncThunk(
  "users/update",
  async ({ id, followers }) => {
    try {
      const response = await axios.put(`/users/${id}`, { followers });
      return response.data;
    } catch (error) {
      return alert(error.message);
    }
  }
);
