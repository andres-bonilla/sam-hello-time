export const getTimeByTimeZone = (timeZone) => {
  // Calcular la hora segun zona horaria de la ip
  const now = new Date();

  const options = {
    timeZone: timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };

  const time = now.toLocaleString('en-US', options);

  return time;
}