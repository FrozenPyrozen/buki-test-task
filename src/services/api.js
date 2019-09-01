import axios from 'axios';

axios.defaults.baseURL = 'https://api.dev.buki.com.ua';
const MESSAGES_PATH = '/frontend_test';

export const getAllMessages = async () => {
  try {
    const res = await axios.get(`${MESSAGES_PATH}`);

    return res.data;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
