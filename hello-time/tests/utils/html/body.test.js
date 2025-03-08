import { describe, it, expect } from 'vitest';
import { htmlBody } from '../../../utils/html/body';

describe('htmlBody', () => {
  it('Debería generar el HTML correcto con el nombre y la hora proporcionados', () => {
    const name = 'Pedro';
    const time = '14:30:07';
    const result = htmlBody(name, time);
    
    // Verificar que el resultado contiene el nombre y la hora en el lugar correcto
    expect(result).toContain('<h1>Hola Pedro, la hora actual es 14:30:07</h1>');
  });
});
