import express, {NextFunction, Request, Response } from "express"
import  createConnection  from "../infra/typeorm";
import "express-async-errors"
import "reflect-metadata"
;
import { routes } from "./routes";
import { AppError } from "../../error/AppError";
import "../container";

createConnection();

const app = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statuscode).json({ message: err.message });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`,
  });
});




export {app}