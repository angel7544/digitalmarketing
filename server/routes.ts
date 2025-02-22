import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertTipSchema } from "@shared/schema";

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

  const httpServer = createServer(app);
  return httpServer;
}
