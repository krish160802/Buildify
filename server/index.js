import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const resend = new Resend(process.env.RESEND_API_KEY);

// Health check (keep this)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});


app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, source, services } = req.body;

    
    if (!name || !email) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    await resend.emails.send({
      from: "Buildify <onboarding@resend.dev>", 
      to: process.env.RECEIVER_EMAIL,
      subject: "🚀 New Lead from Buildify",
      html: `
        <h2>New Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Source:</b> ${source || "-"}</p>
        <p><b>Services:</b> ${services?.join(", ") || "-"}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
