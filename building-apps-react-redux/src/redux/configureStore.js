// Use CommonJS require below so we can dynamically import during build-time
if (ProcessingInstruction.env.NODE_ENV === "production") {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
