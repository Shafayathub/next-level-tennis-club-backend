import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/modules/members/members.routes";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/members', router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;