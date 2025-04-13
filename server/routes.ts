import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { contactSchema, demoSchema } from "@shared/schema";
import { ZodError } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL,
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Business Type:</strong> ${data.businessType}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `
      });

      res.json({ message: "Contact form submitted successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error('Email error:', error);
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  app.post("/api/demo", async (req, res) => {
    try {
      const data = demoSchema.parse(req.body);
      const request = await storage.createDemoRequest(data);
      res.json(request);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit demo request" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}