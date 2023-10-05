import axios from 'axios';

const API_KEY = '38987470 - 9f970206f85777d56fe530dc2';

export const fetch = async () => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
