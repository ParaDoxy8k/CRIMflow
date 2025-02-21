import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/register", (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: error.json });
  }

  console.log("📩 Email:", email);
  console.log("👤 Username:", username);
  console.log("🔑 Password:", password);

  res.json({ message: "Register success!" });
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
