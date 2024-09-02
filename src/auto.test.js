import { leer_comando } from "./auto.js";

describe("Auto a Control Remoto", () => {
    it("deberia retornar el comando 5,5/1,2N/IAIAIAIAA", () => {
      expect(leer_comando("5,5/1,2N/IAIAIAIAA")).toEqual("5,5/1,2N/IAIAIAIAA");
    });
  });