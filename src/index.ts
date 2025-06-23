import { app } from "./app";
import { log } from "./app/utils/logger";
const { PORT } = process.env;
// index js
const startServer = async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      log.info(`🌐 Server started on port ${PORT}`);
    });
  } catch (err: any) {
    log.error(err.message);
  }
};

startServer();