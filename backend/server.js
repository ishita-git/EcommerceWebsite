const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
// CONFIG
dotenv.config({path:"backend/config/config.env"});

//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);

      process.exit(1);
  });


//Connectivity with Database
connectDatabase()

app.listen(process.env.PORT,() => {
    
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });