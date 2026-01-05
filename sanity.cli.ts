import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pdtlyte1",
    dataset: "production",
  },
  deployment: {
    appId: "wxh76mq22ucra08k1891693p",
  },
});
