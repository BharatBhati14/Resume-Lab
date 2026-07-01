import axios from "axios";

async function handleDownload() {
  const resume = document.getElementById("resume");
  const html = `
      <!DOCTYPE html>
      <html>
      <head>
      <style>
      ${[...document.styleSheets]
        .map((sheet) => {
          try {
            return [...sheet.cssRules].map((rule) => rule.cssText).join("");
          } catch {
            return "";
          }
        })
        .join("")}
        #resume {
          padding:unset;
        }
      </style>
      </head>

      <body>

      ${resume.outerHTML}

      </body>
      </html>
    `;

  //   const response = await fetch("http://localhost:5000/api/pdf/", {
  //     method: "POST",

  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({
  //       html,
  //     }),
  //   });

  //   const blob = await response.blob();

  //   const url = window.URL.createObjectURL(blob);

  //   ***************
  const { data } = await axios.post(
    "/api/pdf/",
    { html },
    {
      responseType: "blob",
    },
  );

  const url = URL.createObjectURL(data);

  //   ***********

  const a = document.createElement("a");

  a.href = url;

  a.download = "resume.pdf";

  a.click();

  window.URL.revokeObjectURL(url);
}

export default handleDownload;
