import { createServer } from "./server.js";

const port = 6173;

createServer().then(({ app }) => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
