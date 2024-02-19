//TODO: use UserRepository instead of calling directly Supabase from Service

import "dotenv/config";
import axios from "axios";
import { generateRefreshToken } from "./tokenService.js";

const axiosInstance = axios.create({
  baseURL: process.env.SUPABASE_URL,
  timeout: 1000,
  headers: { apikey: process.env.SUPABASE_API_KEY }
});

async function createUser(email, password, firstname, lastname) {
  try {
    const refresh_token = await generateRefreshToken();

    const response = await axiosInstance.post(`/customers`, {
      firstname,
      lastname,
      email,
      password,
      refresh_token
    });

    if (!response.status === 201) {
      throw new Error("Can't create user");
    } else {
      return JSON.parse(response.config.data);
    }
  } catch (error) {
    console.error(error);
    if (error.response.status === 409) {
      throw new Error("User already exists");
    } else {
      throw new Error("Can't create users");
    }
  }
}

async function readAllUsers() {
  try {
    const response = await axiosInstance.get(`/customers`);
    const users = response.data;
    if (!users) {
      throw new Error("Can't read users");
    } else {
      return users.map((user) => {
        //hide password on each user
        user.password = "*****";
        return user;
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error("Can't read users");
  }
}

async function readOneUserById(id) {
  try {
    const response = await axiosInstance.get(`/customers?id=eq.${id}&select=*`);
    const user = response.data[0];

    if (!user) {
      throw new Error(`Can't find user with id ${id}`);
    } else {
      //hide password on each user
      user.password = "*****";
      return user;
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Can't find user with id ${id}`);
  }
}

async function readOneUserByEmail(email) {
  try {
    const response = await axiosInstance.get(
      `/customers?email=eq.${email}&select=*`
    );
    const user = response.data[0];
    if (!user) {
      throw new Error(`Can't find user with email ${email}`);
    } else {
      return user;
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Can't find user with email ${email}`);
  }
}

export { createUser, readAllUsers, readOneUserById, readOneUserByEmail };
