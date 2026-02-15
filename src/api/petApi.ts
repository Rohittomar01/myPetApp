import axios from 'axios';

export const submitPet = async (data: any) => {
  try {
    const res = await axios.post('https://reqres.in/api/users', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  } catch (error: any) {
    console.log('Status:', error?.response?.status);
    console.log('Data:', error?.response?.data);
    throw error;
  }
};

export const fetchRandomPetImage = async () => {
  const res = await axios.get('https://dog.ceo/api/breeds/image/random');
  return res.data.message;
};
