export default class Config {
  static get environment() {
    return process.env.NODE_ENV;
  }

  static get firebaseConfig() {
    if (
      !process.env.FIREBASE_API_KEY ||
      !process.env.FIREBASE_AUTH_DOMAIN ||
      !process.env.FIREBASE_DATABASE_URL ||
      !process.env.FIREBASE_PROJECT_ID ||
      !process.env.FIREBASE_STORAGE_BUCKET ||
      !process.env.FIREBASE_MESSAGING_SENDER_ID ||
      !process.env.FIREBASE_APP_ID ||
      !process.env.FIREBASE_MEASUREMENT_ID
    ) {
      throw new Error('Firebase environment variables are not set');
    }

    return {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    };
  }
}
