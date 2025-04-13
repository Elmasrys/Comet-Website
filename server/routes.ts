import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { contactSchema, demoSchema } from "@shared/schema";
import { ZodError } from "zod";
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express) {
  app.post("/api/partners", async (req, res) => {
    try {
      const data = partnerFormSchema.parse(req.body);
      
      await resend.emails.send({
        from: process.env.SENDER_EMAIL,
        to: process.env.NOTIFICATION_EMAIL,
        subject: "New Partner Application",
        html: `
          <h2>New Partner Application</h2>
          <p><strong>Company:</strong> ${data.companyName}</p>
          <p><strong>Contact Name:</strong> ${data.contactName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Website:</strong> ${data.website}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <p><strong>Partner Type:</strong> ${data.partnerType}</p>
          <p><strong>Company Size:</strong> ${data.companySize}</p>
          <p><strong>Description:</strong> ${data.description}</p>
          <p><strong>Experience:</strong> ${data.experience}</p>
        `
      });

      res.json({ message: "Partner application submitted successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error('Email error:', error);
        res.status(500).json({ message: "Failed to submit partner application" });
      }
    }
  });
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      await resend.emails.send({
        from: process.env.SENDER_EMAIL,
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