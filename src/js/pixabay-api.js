import axios from 'axios';
// axios Settings
axios.defaults.baseURL = 'https://pixabay.com/api/';
const myApiKey = '49354290-35d6e1dc5d842ed86975730ff';
const axiosOptions = key => {
  const params = {
    params: {
      key: myApiKey,
      q: key,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    },
  };
  return params;
};

export function apiRequest(requestKey) {
  return new Promise((resolve, reject) => {
    axios
      .get('', axiosOptions(requestKey))
      .then(response => {
        if (response.data.total !== 0) {
          resolve(response.data.hits);
          return;
        } else {
          reject(
            `Sorry, there are no images matching your ${requestKey}. Please try again!`
          );
          return;
        }
      })
      .catch(response => {
        reject(response.message);
      });
  });
}