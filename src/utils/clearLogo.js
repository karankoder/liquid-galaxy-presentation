import axios from 'axios';
import { serverUrl } from '../main';
import { fetchfromLocalStorage } from './localStorageUtils';

export const clearLogo = async () => {
  try {
    const data = fetchfromLocalStorage([
      'ip',
      'port',
      'username',
      'password',
      'numberOfRigs',
    ]);
    const response = await axios.post(
      `${serverUrl}/lg-connection/clean-logos`,
      {
        ip: data.ip,
        port: data.port,
        username: data.username,
        password: data.password,
        screens: data.numberOfRigs,
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
