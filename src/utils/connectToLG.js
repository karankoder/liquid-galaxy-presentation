import axios from 'axios';
import { serverUrl } from '../main';

export const connectToLG = async (data) => {
  try {
    const response = await axios.post(
      `${serverUrl}/lg-connection/connect-lg`,
      {
        ip: data.ip,
        port: data.port,
        username: data.username,
        password: data.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
