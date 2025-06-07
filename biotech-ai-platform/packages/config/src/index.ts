import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  API_BASE_URL: z.string().url().default('http://localhost:8000/api'),
});

// This would typically load from process.env and validate
// For package purposes, we might just define schemas or default values
export const baseConfig = {
  servicePorts: {
    literature: process.env.LITERATURE_SERVICE_PORT || 8000,
    experiment: process.env.EXPERIMENT_SERVICE_PORT || 8001,
    // ... other services
  },
};

export type AppConfig = z.infer<typeof EnvSchema>;

// Function to load and validate config (could be used by apps/services)
// export const loadConfig = (): AppConfig => {
//  return EnvSchema.parse(process.env);
// }

export const getConfig = () => {
  // In a real scenario, this would parse process.env
  // For now, just returning some defaults
  return EnvSchema.parse({
      NODE_ENV: process.env.NODE_ENV,
      API_BASE_URL: process.env.API_BASE_URL
  });
}
