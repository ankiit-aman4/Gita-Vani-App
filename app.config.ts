import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Gita Vani',
  slug: 'gita-chat',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#FFF8E7',
  },

  plugins: [
    [
      'expo-notifications',
      {
        icon: './assets/icon.png',
        color: '#D4A574',
      },
    ],
  ],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: 'com.ankiitaman.gitasaar',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    anthroApiKey: process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY,
    eas: {
      projectId: '5381f661-1d6d-44e3-94a4-4ba8b1d9ce9a',
    },
  },
});