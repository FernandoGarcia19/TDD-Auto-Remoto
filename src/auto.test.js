import { leer_comando , leer_dimension, leer_instrucciones, leer_pos_inicial} from "./auto.js";

describe("Auto a Control Remoto", () => {
    it("deberia validar el comando 5,5/1,2N/IAIAIAIAA", () => {
      expect(leer_comando("5,5/1,2N/IAIAIAIAA")).toEqual(true);
    });
    it("deberia validar el comando 5,5/1,2N/IAIAIAIAA", () => {
      expect(leer_comando("5,5/1,2N/IAIZ")).toEqual(false);
    });
    it("deberia retornar la dimension del mapa", () => {
      expect(leer_dimension("5,5/1,2N/IAIAIAIAA")).toEqual("5,5");
    });
    it("deberia retornar la posicion inicial 1,2", () => {
      expect(leer_pos_inicial("5,5/1,2N/IAIAIAIAA")).toEqual("1,2N");
    });
    it("deberia retornar las instrucciones", () => {
      expect(leer_instrucciones("5,5/1,2N/IAIAIAIAA")).toEqual("IAIAIAIAA");
    });
  });