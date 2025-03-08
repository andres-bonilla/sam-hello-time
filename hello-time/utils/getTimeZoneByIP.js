export const getTimeZoneByIP = async (ip) => {
  // Obtener la zona horaria de la ip desde la api-ip
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();
    return data.timezone;
  } 
  catch (error) {
    console.error(error);
    return "UTC";
  }
}