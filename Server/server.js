import "dotenv/config";

import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import { closeBrowser } from "./src/features/puppeteerPdfFeature/browser.utils.js";

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// close Puppeteer browser instance on app shutdown
async function shutdown() {
  console.log("Shutting down...");

  await closeBrowser();

  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGINT", shutdown); // on Ctrl+C
process.on("SIGTERM", shutdown);
