const fs = require("fs");

fs.writeFile("data.txt", "I am modifying ya!", (error) => {
  if (error) {
    console.log("error!");
  } else {
    console.log("success!");
  }
});
