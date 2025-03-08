import { getTimeByTimeZone } from "./utils/getTimeByTimeZone.js";
import { getTimeZoneByIP } from "./utils/getTimeZoneByIP.js";
import { htmlBody } from "./utils/html/body.js";
import { htmlHead } from "./utils/html/head.js";

export const helloTimeHandler = async (event) => {
  // Obtener el nombre del usuario desde la query
  const queryParams = event.queryStringParameters || {};
  const name = queryParams.name || "desconocido";

  // Obtener la IP del usuario desde API Gateway y calcular zona horaria.
  const ip = event.requestContext?.identity?.sourceIp || "8.8.8.8";
  const timeZone = await getTimeZoneByIP(ip);

  // Calcular la hora actual segun zona horaria del usuario.
  const time = getTimeByTimeZone(timeZone);

  // Respuesta con HTML<h1>Hola ${name}, la hora actual es ${time}<h1>
  const response = {
    "statusCode": 200,
    "headers": {
      "Content-Type": "text/html"
    },
    "body": `<html lang="es">
        ${htmlHead("Hello Time")}
        ${htmlBody(name, time)}
      </html>`
  };

  return response;
};
