import axios from 'axios';
import { serverUrl } from '../main';
import { fetchfromLocalStorage } from './localStorageUtils';

export const flyto = async () => {
  try {
    const data = fetchfromLocalStorage([
      'ip',
      'port',
      'username',
      'password',
      'numberOfRigs',
    ]);
    const response = await axios.post(
      `${serverUrl}/lg-connection/flyto`,
      {
        ip: data.ip,
        port: data.port,
        username: data.username,
        password: data.password,
        screens: data.numberOfRigs,
        latitude: '40.7128',
        longitude: '-74.0060',
        elevation: '12000',
        tilt: '45',
        bearing: '0',
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
