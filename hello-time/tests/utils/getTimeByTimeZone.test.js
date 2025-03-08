import { describe, it, expect, vi } from "vitest";
import { getTimeByTimeZone } from "../../utils/getTimeByTimeZone.js";

describe("getTimeByTimeZone", () => {
  it("Debería devolver la hora correcta para una zona horaria dada", () => {
    // Creamos una fecha fija para que el test
    const fixedDate = new Date("2025-03-08T12:34:56Z");

    // Mock de Date para que siempre retorne la fecha fija
    vi.setSystemTime(fixedDate);

    // Prueba con una zona horaria específica
    const timeZone = "America/New_York";
    const expectedTime = "07:34:56"; // La hora en America/New_York a las 12:34:56 UTC

    const time = getTimeByTimeZone(timeZone);

    expect(time).toBe(expectedTime);
  });
});