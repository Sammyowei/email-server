import express from "express";
import cors from "cors";
import sendThroughNodeMailer from "./send.js"; // Correct file extension

const app = express();

app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { email, subject, content } = req.body;
  try {
    const result = await sendThroughNodeMailer(email, subject, content);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
