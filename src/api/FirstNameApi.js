import axios from "axios";

export const firstNameApi = axios.create({
  // baseURL: `${process.env.REACT_APP_API_SERVER}`,
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const createFile = async (data) => {
  var formData = new FormData();
  formData.append("file_path", data.file_path);
  formData.append("column_name", data.column_name);
  formData.append("file_extension", data.file_extension);
  
  const response = await firstNameApi.post("/firstnamefile/", formData);
  return response.data;
};
