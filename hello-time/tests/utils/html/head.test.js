import { describe, it, expect } from 'vitest';
import { htmlHead } from '../../../utils/html/head.js';

describe('htmlHead', () => {
  it('Debería generar el HTML correcto con el título proporcionado', () => {
    const title = 'Hello Time';
    const result = htmlHead(title);
    
    // Verificar que contenga el título
    expect(result).toContain('<title>Hello Time</title>');
    
    // Verificar que también incluye el estilo
    expect(result).toContain('<style>');
  });
});
