import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertTipSchema, insertContactSchema } from "@shared/schema";

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

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    const messageData = insertContactSchema.parse({
      ...req.body,
      createdAt: new Date().toISOString(),
    });
    const message = await storage.createContactMessage(messageData);
    res.json(message);
  });

  // Get all contact messages (could be used for admin panel later)
  app.get("/api/contact/messages", async (_req, res) => {
    const messages = await storage.getContactMessages();
    res.json(messages);
  });

  const httpServer = createServer(app);
  return httpServer;
}