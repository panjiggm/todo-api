"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const TodoController_1 = require("../controller/TodoController");
router.get('/', TodoController_1.getTodos);
router.post('/', TodoController_1.createTodo);
router.put('/:id', TodoController_1.updateTodo);
router.delete('/:id', TodoController_1.deleteTodo);
router.put('/toggle/:id', TodoController_1.toggleTodo);
//# sourceMappingURL=todo.js.map