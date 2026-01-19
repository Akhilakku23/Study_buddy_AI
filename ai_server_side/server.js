import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat.js";
import AdvChatRoute from "./routes/Adv.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/chat", chatRoute);
app.use("/Ai", AdvChatRoute);
app.listen(5000, () => {
  console.log("Study Buddy awake on port 5000 locally at http://localhost:5000");
});
