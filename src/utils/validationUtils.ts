export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validateName = (name: string): boolean => {
  const nameRegex = /^(?![0-9])([A-Za-zÀ-ÖØ-öø-ÿ]+ ){1,}[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
  return nameRegex.test(name);
};
