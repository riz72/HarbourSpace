import axios from 'axios';

const apiUrl = 'https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab';

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchData };