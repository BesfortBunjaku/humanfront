import axios from "axios";

export const filesApi = axios.create({
  // baseURL: `${process.env.REACT_APP_API_SERVER}`,
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-type": "application/json",
  },
});

export const getFiles = async () => {
  const response = await filesApi.get("/statistics");
  return response.data;
};

export const getFilesById = async (id) => {
  const response = await filesApi.get(`/files/${id}`);
  return response.data;
};

 

export const updateFile = async (id, data) => {
  const response = await filesApi.put(`/files/${id}`, data);
  return response.data;
};

export const deleteFile = async (id) => {
  const response = await filesApi.delete(`/upload/${id}`);
  return response.data;
};
