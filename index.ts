require('dotenv').config();

import Server from "./server/Server";
import Database from "./service/Database";
import log from "./routes/LogSystem";
import trajectory from "./routes/TrajectoryRoute";

let db = new Database();
db.connect().catch(err=>{
    console.log(err);
});

new Server().initServer([log, trajectory]);

process.on('SIGINT', async () => {
    await db.disconnect();
});