import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2cfda7099ca19e12d2fcaa8d19bfa1f1@o4509454097580032.ingest.us.sentry.io/4509454101643264",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
