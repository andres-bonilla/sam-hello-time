import { describe, it, expect, vi, beforeEach } from 'vitest';
import { htmlStyle } from '../utils/html/style.js';
import { helloTimeHandler } from '../index.js';


describe('helloTimeHandler', () => {
  // Antes de cada test, limpiamos mocks
  beforeEach(() => {
    vi.clearAllMocks();
    // Establecemos una hora fija para las pruebas
    vi.setSystemTime(new Date('2025-03-08T12:30:00Z'));
  });

  it('Debería devolver una respuesta HTML con el saludo y la hora correcta', async () => {
    // Evento de prueba
    const event = {
      queryStringParameters: { name: 'Pedro' },
      requestContext: { identity: { sourceIp: '192.0.2.0' } }
    };

    // Simulamos la respuesta de fetch para obtener la zona horaria
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: () => ({ timezone: 'America/Montevideo' })
    });

    const response = await helloTimeHandler(event);

    // Verificamos el código de estado y encabezados
    expect(response.statusCode).toBe(200);
    expect(response.headers['Content-Type']).toBe('text/html');

    // Comprobamos el cuerpo de la respuesta (HTML)
    const expectedBody = `
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello Time</title>
          ${htmlStyle}
        </head>
        <body>
          <div class="container">
            <h1>Hola Pedro, la hora actual es 09:30:00</h1>
          </div>
        </body>
      </html>`;
    expect(response.body.replace(/\s+/g, ' ').trim()).toBe(expectedBody.replace(/\s+/g, ' ').trim());
  });

  it('Debería manejar errores y devolver "desconocido" como nombre y la hora en UTC', async () => {
    // Evento sin query
    const event = {
      queryStringParameters: {},
      requestContext: { identity: { sourceIp: '203.0.113.0' } }
    };

    // Simulamos que fetch falle
    vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('API error'));

    const response = await helloTimeHandler(event);

    // Verificamos el código de estado y encabezados
    expect(response.statusCode).toBe(200);
    expect(response.headers['Content-Type']).toBe('text/html');

    // Comprobamos el cuerpo de la respuesta (HTML)
    const expectedBody = `
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello Time</title>
          ${htmlStyle}
        </head>
        <body>
          <div class="container">
            <h1>Hola desconocido, la hora actual es 12:30:00</h1>
          </div>
        </body>
      </html>`;
    expect(response.body.replace(/\s+/g, ' ').trim()).toBe(expectedBody.replace(/\s+/g, ' ').trim());
  });
});

