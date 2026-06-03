/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "insim",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage ?? ""),
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
        },
      },
    };
  },
  async run() {
    // Marketing site — Vite + React static SPA.
    const marketing = new sst.aws.StaticSite("Marketing", {
      path: "apps/marketing",
      build: {
        command: "pnpm build",
        output: "dist",
      },
      // Wire a custom domain once DNS is ready, e.g.:
      // domain: {
      //   name: "insimeducation.com",
      //   redirects: ["www.insimeducation.com"],
      // },
    });

    return {
      marketing: marketing.url,
    };
  },
});
