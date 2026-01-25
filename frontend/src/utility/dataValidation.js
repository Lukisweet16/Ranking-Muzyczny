const emailRegexp = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

export const emailValidation = (string) => {
  return emailRegexp.test(string);
};
