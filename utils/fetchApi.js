import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

/* headers: {
  'x-rapidapi-host': 'bayut.p.rapidapi.com',
  'x-rapidapi-key': 'dbdc1e7380mshf23d625a1e44e54p149710jsneba1ec309d1e'
} */

export const fetchApi = async (url) => {
  const config = {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'dbdc1e7380mshf23d625a1e44e54p149710jsneba1ec309d1e'
    }
  };
  const { data } = await axios.get(`${baseUrl}${url}`, config);

  return data;
}