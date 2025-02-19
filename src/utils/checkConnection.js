import axios from "axios";
import { serverUrl } from "../main";

export const checkConnection = async (data) => {
  try {
    const response = await axios.post(
      `${serverUrl}/lg-connection/check-connection`,
      {
        ip: data.ip,
        port: data.port,
        username: data.username,
        password: data.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
