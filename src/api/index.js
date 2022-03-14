import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.kojaro.com/',
  headers: {
    'sec-ch-ua':
      '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    host: 'www.kojaro.com',
  },
});

export async function getLandmarks(city) {
  const config = {
    method: 'post',
    url: 'attraction/attractionadvancedfilter/filter/?Url=%D8%AA%D9%87%D8%B1%D8%A7%D9%86-118-ci%2Fsort%2F13%2F',
    data: 'params=تهران-118-ci',
  };
  return await api(config);
}
