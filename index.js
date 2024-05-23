import app from "./src/app.js";
const PORT = process.env.PORT || 4000;
// import { sequelize } from "./database/database.js";

async function main() {
  // await sequelize.sync({force: false});
  app.listen(PORT);
  console.log("Server Running");
}

main();
