import dotenv from "dotenv";
dotenv.config();

const throwIfUndefined = (value: any, message: string) => {
  if (value === undefined) {
    throw new Error(`Please configure ${message} in your ENV file`);
  }

  return value;
};

const APP_PORT = throwIfUndefined(process.env.PORT, "PORT");
const DATABASE_URL = throwIfUndefined(process.env.DATABASE_URL, "DATABASE_URL");
export { APP_PORT, DATABASE_URL };
