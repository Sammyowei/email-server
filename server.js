

const express = require("express")
const cors = require("cors")
const sendThroughNodeMailer = require("./send.js")
const sendFirebasePushNotification = require("./track.js")



const app = express();





app.use(express.json());
app.use(cors());


// 1x1 Transparent Image Buffer
const transparentImage = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wIAAgEBAAAAAP8A9kSMAAAAAElFTkSuQmCC",
  "base64"
);


app.post("/send-email", async (req, res) => {
  const { email, subject, content } = req.body;
  const { token } = req.query;

  if (!email || !subject || !content || !token) {
    return res.status(400).json({ success: false, error: "Missing required fields." });
  }

  try {
    const result = await sendThroughNodeMailer(email, subject, content, token);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }



});
app.get("/track-email", async (req, res) => {


  const { token, email } = req.query;

  if (!email || !token) {
    return res.status(400).send("Missing email or FCM token");
  }

  try {

    await sendFirebasePushNotification(token, "Email Opened", `The email sent to ${email} has been opened.`);

    // Return a 1x1 transparent image
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": transparentImage.length,
    });
    res.end(transparentImage);


  } catch (error) {
    console.error("Error tracking email:", error);
    res.status(500).send("Error tracking email");
  }

});



const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
