export function objectToFormData(obj) {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
}

export const parseDiffDays = (timestamp) => {
  let expiresMilisecond = timestamp * 1000;
  const expiresDate = new Date(expiresMilisecond);
  return expiresDate.toUTCString();
};
