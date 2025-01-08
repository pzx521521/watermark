import dva from "dva";
import "./index.css";

// 1. Initialize
const app = dva();

// 2. Model
// app.model(require('./models/example').default);

// 3. Router
app.router(require("./router").default);

// 4. Start
app.start("#root");
