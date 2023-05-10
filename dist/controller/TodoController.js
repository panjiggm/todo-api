"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTodo = exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const client_1 = __importDefault(require("../utils/client"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield client_1.default.todo.findMany();
        res.json(todos);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});
exports.getTodos = getTodos;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, completed } = req.body;
        const newTodo = yield client_1.default.todo.create({
            data: {
                title,
                completed,
            },
        });
        res.json(newTodo);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});
exports.createTodo = createTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, completed } = req.body;
        const { id } = req.params;
        const todo = yield client_1.default.todo.update({
            where: {
                id,
            },
            data: {
                title,
                completed,
            },
        });
        res.json(todo);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield client_1.default.todo.delete({
            where: {
                id,
            },
        });
        res.json(todo);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});
exports.deleteTodo = deleteTodo;
const toggleTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield client_1.default.todo.findUnique({
            where: { id },
        });
        if (!todo) {
            res.status(404).json({ message: 'Todo not Found!' });
        }
        const newTodo = yield client_1.default.todo.update({
            where: {
                id,
            },
            data: {
                completed: !(todo === null || todo === void 0 ? void 0 : todo.completed),
            },
        });
        res.json(newTodo);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});
exports.toggleTodo = toggleTodo;
