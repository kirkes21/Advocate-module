export const analyticsURL = "https://api.parsely.com/v2/analytics";
export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_SECRET = process.env.REACT_APP_API_SECRET;

export const fetchTopAuthors_24h = async () => {
  const response = await fetch(`${analyticsURL}/authors?apikey=${API_KEY}&secret=${API_SECRET}&period_start=24h`);
  const result = await response.json();
  console.log(result)
  return result;
};

