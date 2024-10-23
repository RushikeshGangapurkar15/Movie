import axios from "axios";

export const baseURL = "https://api.themoviedb.org/3/movie";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzZjNTMzY2RhMjA0NTQ1ZmIxZTBlYmQxODBjN2Y0MiIsIm5iZiI6MTcyOTY1MTg3Mi4xNDYzMDcsInN1YiI6IjY3MTg2MzdjYTRhYzhhNDMyYzViYzJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsHJHF0c_tDG9SMYtzittDi4qN3pJSOa5WraN4BB-0o";
export const getTrendingMovieList = async () => {
  try {
    const response = await axios.get(`${baseURL}/now_playing`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
export const getPopularMovieList = async () => {
  try {
    const response = await axios.get(`${baseURL}/popular`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
export const getTopRatedMovieList = async () => {
  try {
    const response = await axios.get(`${baseURL}/top_rated`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getUpcomingMovieList = async () => {
  try {
    const response = await axios.get(`${baseURL}/upcoming`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
