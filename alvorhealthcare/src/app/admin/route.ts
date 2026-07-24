const adminHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Alvor Healthcare Content Editor</title>
  </head>
  <body>
    <div id="nc-root">Loading content editor...</div>
    <script src="https://unpkg.com/decap-cms@3.15.0/dist/decap-cms.js"></script>
  </body>
</html>`;

export function GET() {
  return new Response(adminHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
