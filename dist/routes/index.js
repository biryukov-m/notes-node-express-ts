"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers/controllers");
const middleware_1 = require("../middleware/middleware");
exports.router = express_1.default.Router();
exports.router.get("/notes/stats", controllers_1.getStatsRoute);
exports.router
    .route("/notes/:id")
    .get(controllers_1.getNote)
    .delete(controllers_1.deleteNoteRoute)
    .patch((0, middleware_1.validateYup)(middleware_1.Schemas.updateNote), controllers_1.updateNoteRoute);
exports.router
    .route("/notes")
    .get(controllers_1.getAllNotes)
    .post((0, middleware_1.validateYup)(middleware_1.Schemas.createNote), controllers_1.createNoteRoute);
