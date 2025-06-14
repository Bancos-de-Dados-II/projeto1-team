import express from "express";
import institutionRouter from "./routes/institution.router";

const app = express();
app.use(express.json());

app.use("/institutions", institutionRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});