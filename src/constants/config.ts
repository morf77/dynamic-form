const PRODUCTION = 'production';

const CURRENT_MODE = process.env.NODE_ENV;

const globalConfig = {
  currentMode: CURRENT_MODE || PRODUCTION,
  // in a real project we read just from env, but here we use a constant for simplicity (runnable without env)
  baseUrl: process.env.BASE_URL || 'https://assignment.devotel.io',
  frontURL: process.env.FRONT_URL || ''
} as const;

export { globalConfig };
