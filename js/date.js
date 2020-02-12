// to get date
const getDate = () => {
  const nowDate = new Date();
  const day = nowDate.getDate();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthString = months[nowDate.getMonth()];
  const year = nowDate.getFullYear();
  const hours = nowDate.getHours();
  const minutes = nowDate.getMinutes();

  return `${day}/${monthString}/${year} ${hours}:${minutes}`
};