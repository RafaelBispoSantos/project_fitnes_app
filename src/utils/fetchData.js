export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "df95470bfbmsh528832139c4f052p1d81c7jsn3b64fd20ca73",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/video/related",

  headers: {
    "X-RapidAPI-Key": "df95470bfbmsh528832139c4f052p1d81c7jsn3b64fd20ca73",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
