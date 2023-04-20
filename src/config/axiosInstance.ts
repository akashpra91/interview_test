import axios from "axios";
import { setUserToStorage } from "../utils/storageUtils";

export const axiosInstance = axios.create({
  baseURL: "https://randomuser.me",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  },
});

export const getUserDetails = () => {
  
    return axiosInstance.get("/api")
    .then(res =>{
      if (res.status === 200)
        setUserToStorage(res.data.results[0]);
        // console.log(`api called resposn${data}`, res );
    })
}
