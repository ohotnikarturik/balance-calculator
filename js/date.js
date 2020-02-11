// to get date
const getDate = () => {
  const nowDate = new Date();
  const day = nowDate.getDate();
  const month = nowDate.getMonth();
  const year = nowDate.getFullYear();
  const hours = nowDate.getHours();
  const minutes = nowDate.getMinutes();

  return `${day}/${month}/${year} ${hours}:${minutes}`
};