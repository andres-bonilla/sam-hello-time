import { describe, it, expect, vi } from "vitest";
import { getTimeZoneByIP } from "../../utils/getTimeZoneByIP.js";

describe("getTimeZoneByIP", () => {
  it("Debería devolver la zona horaria si la API responde correctamente", async () => {
    // Mock de la función fetch para simular una respuesta exitosa
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: vi.fn().mockResolvedValue({ timezone: "America/New_York" }),
    });

    const ip = "8.8.8.8"; // IP de ejemplo
    const timeZone = await getTimeZoneByIP(ip);

    expect(timeZone).toBe("America/New_York");
  });
  it("Debería devolver UTC si hay un error al obtener la zona horaria", async () => {
    // Mock de la función fetch para simular un error
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("API error"));

    const ip = "8.8.8.8"; // IP de ejemplo
    const timeZone = await getTimeZoneByIP(ip);
    
    expect(timeZone).toBe("UTC");
  });
});

