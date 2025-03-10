/* Function to dinamically generate image url */
export const getImageUrl = (path) => {
  /* Trying to pass /assets/ in the path doesn't work */
  const url = new URL(path, import.meta.url).href;
  console.log(url);
  return url;
}; 