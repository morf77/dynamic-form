const PRODUCTION = 'production';

const CURRENT_MODE = process.env.NODE_ENV;

const globalConfig = {
  currentMode: CURRENT_MODE || PRODUCTION,
  supportedDeviceTypes: process.env.NEXT_PUBLIC_SUPPORTED_DEVICE_TYPES || 'mobile',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  wssBaseUrl: process.env.NEXT_PUBLIC_WSS_BASE_URL,
  frontURL:
    process.env.NEXT_PUBLIC_FRONT_URL ||
    (CURRENT_MODE === 'production' ? 'https://app.skenas.io' : 'http://localhost:3000')
} as const;

export { globalConfig };
