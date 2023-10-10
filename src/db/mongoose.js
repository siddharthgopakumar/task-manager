const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017/task-manager-api";

main().catch((e) => console.log(e));

async function main() {
  mongoose.connect(connectionURL);
}
