export const baseURL = "https://api.parsely.com/v2";
export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_SECRET = process.env.REACT_APP_API_SECRET;

export const fetchAuthors = async () => {
  try {
    const response = await fetch(`${baseURL}/referrers/social/authors?apikey=${API_KEY}&secret=${API_SECRET}&limit=5&period_start=30d`);

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err)
  }
};

export const fetchArticle = async (authorNoSpaces) => {
  try {
    const response = await fetch(`${baseURL}/referrers/social/posts?apikey=${API_KEY}&secret=${API_SECRET}&limit=1&author=${authorNoSpaces}&period_start=30d`);

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err)
  }
};