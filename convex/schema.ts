import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    apps: defineTable({ name: v.string(), token: v.string(), createdAt: v.string() }).index("by_token", ["token"]),
    logs: defineTable({ appId: v.id("apps"), level: v.string(), message: v.string(), metadata: v.optional(v.any()), ts: v.string() }).index("by_app_ts", ["appId", "ts"]).index("by_level", ["level"]),
    savedQueries: defineTable({ name: v.string(), query: v.string(), createdAt: v.string() })
});
