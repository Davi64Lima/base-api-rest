import { ConfigData } from "./config.interface";

export const DEFAULT_CONFIG: ConfigData = {
  port: Number(process.env.PORT || 3000),
  env: "production",
  db: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "17192205",
    database: process.env.DB_DATABASE || "nestjs",
  },
  swagger: {
    username: "",
    password: "",
  },
  logLevel: "",
  email: {
    service_name: "",
    username: "",
    password: "",
  },
  externalApi: {
    apiUrl: "",
    apiKey: "",
  },
};
