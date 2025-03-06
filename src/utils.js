/* Function to dinamically generate image url */
export const getImageUrl = (path) => {
  return new URL(`assets/${path}`, import.meta.url).href;
}