import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertTipSchema, insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/modules", async (req, res) => {
    const modules = await storage.getModules();
    res.json(modules);
  });

  app.get("/api/modules/:category", async (req, res) => {
    const modules = await storage.getModulesByCategory(req.params.category);
    res.json(modules);
  });

  app.get("/api/users/:userId/tips", async (req, res) => {
    const tips = await storage.getUserTips(parseInt(req.params.userId));
    res.json(tips);
  });

  app.post("/api/users/:userId/tips", async (req, res) => {
    const tipData = insertTipSchema.parse(req.body);
    const tip = await storage.createUserTip(tipData);
    res.json(tip);
  });

  app.post("/api/users/:userId/progress", async (req, res) => {
    const user = await storage.updateUserProgress(
      parseInt(req.params.userId),
      req.body.progress
    );
    res.json(user);
  });

  // Contact form submission endpoint with email notification
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });

      // Store in database
      const message = await storage.createContactMessage(messageData);

      // Send email notification
      await sendContactEmail(
        messageData.name,
        messageData.email,
        messageData.message
      );

      res.json(message);
    } catch (error) {
      console.error('Contact form submission error:', error);
      res.status(500).json({ message: 'Failed to process contact form submission' });
    }
  });

  // Get all contact messages
  app.get("/api/contact/messages", async (_req, res) => {
    const messages = await storage.getContactMessages();
    res.json(messages);
  });

  const httpServer = createServer(app);
  return httpServer;
}