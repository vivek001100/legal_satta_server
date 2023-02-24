const express = require("express");
const morgan = require("morgan");
const dotenv=require('dotenv')

dotenv.config({ path: './config.env' });


const app = express();

const routes = require("./routes");

// app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());
app.use("/", routes);

const port = 7000;
// setInterval(() => {
//   authEmailModel.update_login_trial_for_all(0);
// }, 60000);



app.listen(port, () => console.log(`server listening at port ${port}....`));
