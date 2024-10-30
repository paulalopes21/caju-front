export const formatCPF = (cpf: string) => {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const isValidCPF = (cpf: string) => {
  const cleanedCPF = cpf.replace(/\D/g, "");
  if (cleanedCPF.length !== 11 || /^(\d)\1+$/.test(cleanedCPF)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
  }
  let checkDigit = (sum * 10) % 11;
  if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
  if (checkDigit !== parseInt(cleanedCPF.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
  }
  checkDigit = (sum * 10) % 11;
  if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
  return checkDigit === parseInt(cleanedCPF.charAt(10));
};
