import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
const swaggerJSDocs = YAML.load("api.yaml");

const swaggerExport = {
  swaggerServe: swaggerUI.serve,
  swaggerSetup: swaggerUI.setup(swaggerJSDocs),
};

export default swaggerExport;