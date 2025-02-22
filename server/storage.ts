import { users, modules, userTips, contactMessages, type User, type InsertUser, type Module, type UserTip, type ContactMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserProgress(userId: number, progress: Record<string, any>): Promise<User>;

  getModules(): Promise<Module[]>;
  getModulesByCategory(category: string): Promise<Module[]>;

  getUserTips(userId: number): Promise<UserTip[]>;
  createUserTip(tip: Omit<UserTip, "id">): Promise<UserTip>;

  // New contact message methods
  createContactMessage(message: Omit<ContactMessage, "id" | "status">): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  updateMessageStatus(id: number, status: string): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private modules: Map<number, Module>;
  private tips: Map<number, UserTip>;
  private contactMessages: Map<number, ContactMessage>;
  private currentId: { users: number; modules: number; tips: number; messages: number };

  constructor() {
    this.users = new Map();
    this.modules = new Map();
    this.tips = new Map();
    this.contactMessages = new Map();
    this.currentId = { users: 1, modules: 1, tips: 1, messages: 1 };
    this.initializeModules();
  }

  private initializeModules() {
    const defaultModules: Omit<Module, "id">[] = [
      {
        title: "SEO Fundamentals",
        description: "Learn the basics of Search Engine Optimization",
        content: "SEO is the practice of optimizing websites...",
        category: "seo",
        order: 1,
      },
      {
        title: "CRM Basics",
        description: "Understanding Customer Relationship Management",
        content: "CRM systems help businesses manage customer interactions...",
        category: "crm",
        order: 1,
      },
    ];

    defaultModules.forEach(module => {
      const id = this.currentId.modules++;
      this.modules.set(id, { ...module, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.users++;
    const user: User = { ...insertUser, id, progress: {} };
    this.users.set(id, user);
    return user;
  }

  async updateUserProgress(userId: number, progress: Record<string, any>): Promise<User> {
    const user = await this.getUser(userId);
    if (!user) throw new Error("User not found");

    const updatedUser = { ...user, progress };
    this.users.set(userId, updatedUser);
    return updatedUser;
  }

  async getModules(): Promise<Module[]> {
    return Array.from(this.modules.values());
  }

  async getModulesByCategory(category: string): Promise<Module[]> {
    return Array.from(this.modules.values()).filter(
      (module) => module.category === category,
    );
  }

  async getUserTips(userId: number): Promise<UserTip[]> {
    return Array.from(this.tips.values()).filter(
      (tip) => tip.userId === userId,
    );
  }

  async createUserTip(tip: Omit<UserTip, "id">): Promise<UserTip> {
    const id = this.currentId.tips++;
    const newTip = { ...tip, id };
    this.tips.set(id, newTip);
    return newTip;
  }

  async createContactMessage(message: Omit<ContactMessage, "id" | "status">): Promise<ContactMessage> {
    const id = this.currentId.messages++;
    const newMessage: ContactMessage = { 
      ...message, 
      id, 
      status: 'new'
    };
    this.contactMessages.set(id, newMessage);
    return newMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async updateMessageStatus(id: number, status: string): Promise<ContactMessage> {
    const message = this.contactMessages.get(id);
    if (!message) throw new Error("Message not found");

    const updatedMessage = { ...message, status };
    this.contactMessages.set(id, updatedMessage);
    return updatedMessage;
  }
}

export const storage = new MemStorage();