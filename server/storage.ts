import { ContactSubmission, InsertContactSubmission, DemoRequest, InsertDemoRequest } from "@shared/schema";

export interface IStorage {
  createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
  createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getDemoRequests(): Promise<DemoRequest[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, ContactSubmission>;
  private demos: Map<number, DemoRequest>;
  private contactId: number;
  private demoId: number;

  constructor() {
    this.contacts = new Map();
    this.demos = new Map();
    this.contactId = 1;
    this.demoId = 1;
  }

  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactId++;
    const submission: ContactSubmission = {
      ...data,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, submission);
    return submission;
  }

  async createDemoRequest(data: InsertDemoRequest): Promise<DemoRequest> {
    const id = this.demoId++;
    const request: DemoRequest = {
      ...data,
      id,
      createdAt: new Date(),
    };
    this.demos.set(id, request);
    return request;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values());
  }

  async getDemoRequests(): Promise<DemoRequest[]> {
    return Array.from(this.demos.values());
  }
}

export const storage = new MemStorage();
