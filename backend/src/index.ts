import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
const PORT = 4000;

app.use(express.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "password123") {
    res.status(200).send({ message: "Login successful" });
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
