import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  businessType: text("business_type").notNull(),
  message: text("message").notNull(),
  company: text("company").notNull(),
  country: text("country").notNull(),
  phone: text("phone").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const demoRequests = pgTable("demo_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  businessType: text("business_type").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactSchema = createInsertSchema(contactSubmissions)
  .omit({ id: true, createdAt: true })
  .extend({
    email: z.string()
      .min(1, "Email is required")
      .email("Please enter a valid email address")
      .refine((email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const personalDomains = [
          'gmail.com',
          'yahoo.com',
          'hotmail.com',
          'outlook.com',
          'aol.com',
          'icloud.com',
          'mail.com',
          'protonmail.com',
          'zoho.com'
        ];
        const domain = email.toLowerCase().split('@')[1];
        return emailRegex.test(email) && !personalDomains.includes(domain);
      }, "Please use your business email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    phone: z.string()
      .min(1, "Phone number is required")
      .regex(/^\d+$/, "Phone number must contain only digits"),
  });

export const demoSchema = createInsertSchema(demoRequests)
  .omit({ id: true, createdAt: true })
  .extend({
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof contactSchema>;

export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertDemoRequest = z.infer<typeof demoSchema>;

export const partnerFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  website: z.string().url("Invalid website URL"),
  country: z.string().min(1, "Country is required"),
  partnerType: z.string().min(1, "Partner type is required"),
  companySize: z.string().min(1, "Company size is required"),
  description: z.string().min(10, "Description is required"),
  experience: z.string().min(10, "Experience is required")
});

export type PartnerFormData = z.infer<typeof partnerFormSchema>;