// use 'require' to load in said code
// SAME AS : import fs from "fs";
const fs = require("fs");

// reads data.txt file
fs.readFile("data.txt", (error, data) => {
  // if problem
  if (error) {
    console.log("something went wrong");
  } else {
    // if no problem
    console.log(data.toString());
  }
});
