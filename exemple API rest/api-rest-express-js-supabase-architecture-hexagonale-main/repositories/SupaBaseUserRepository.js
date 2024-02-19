//TODO:add methods to communicate with SupaBase

import "dotenv/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.SUPABASE_URL,
  timeout: 1000,
  headers: { apikey: process.env.SUPABASE_API_KEY }
});
