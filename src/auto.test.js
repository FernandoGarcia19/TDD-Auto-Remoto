import { leer_comando , leer_dimension} from "./auto.js";

describe("Auto a Control Remoto", () => {
    it("deberia retornar el comando 5,5/1,2N/IAIAIAIAA", () => {
      expect(leer_comando("5,5/1,2N/IAIAIAIAA")).toEqual("5,5/1,2N/IAIAIAIAA");
    });
    it("deberia retornar la dimension del mapa", () => {
      expect(leer_dimension("5,5/1,2N/IAIAIAIAA")).toEqual("5,5");
    });
  });