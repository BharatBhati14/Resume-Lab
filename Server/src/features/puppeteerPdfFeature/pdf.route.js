import express from "express";
import { getBrowser } from "./browser.utils.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const resumeHTML = req.body.html;

  const browser = await getBrowser();

  const page = await browser.newPage();

  try {
    await page.addStyleTag({
      content: `
        #resume {
            padding:0 !important;
        }`,
    });

    await page.setContent(resumeHTML, {
      waitUntil: "networkidle0",
    });

    const pdf = await page.pdf({
      format: "A4",

      printBackground: true,

      //   preferCSSPageSize: true,

      margin: {
        top: "10mm",
        bottom: "10mm",
        left: "10mm",
        right: "10mm",
      },
    });

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="resume.pdf"',
    });

    res.send(pdf);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "PDF generation failed",
    });
  } finally {
    await page.close();
  }
});

export default router;
