import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { contactSchema, demoSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(data);
      res.json(submission);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
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