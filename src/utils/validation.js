export const validEmail = (str) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
};
export const validTextField = (str) => {
  const hebrewRegex = /^[\u0590-\u05FF]+$/;
  return hebrewRegex.test(str);
};
