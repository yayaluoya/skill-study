import { createServer } from "./server";

const port = 6174;

createServer(undefined, true).then(({ app }) => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
