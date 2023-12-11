import axios from 'axios';

axios.defaults.baseURL = 'https://6571b0e1d61ba6fcc0134960.mockapi.io';

export const fetchCar = async () => {
  const response = await axios.get('/adverts-backend');
  return response.data;
};

export const fetchQuizById = async quizId => {
  const response = await axios.get(`/adverts-backend/${quizId}`);
  return response.data;
};