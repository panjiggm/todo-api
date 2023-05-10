"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const todo_1 = require("./routes/todo");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5050;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/todos', todo_1.router);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
