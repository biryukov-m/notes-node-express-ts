"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const services_1 = require("../services/services");
const middleware_1 = require("../middleware/middleware");
exports.router = express_1.default.Router();
exports.router.get("/notes/stats", services_1.getStatsRoute);
exports.router
    .route("/notes/:id")
    .get(services_1.getNoteRoute)
    .delete(services_1.deleteNoteRoute)
    .patch((0, middleware_1.validateYup)(middleware_1.Schemas.note), services_1.updateNoteRoute);
exports.router
    .route("/notes")
    .get(services_1.getAllNotesRoute)
    .post((0, middleware_1.validateYup)(middleware_1.Schemas.note), services_1.createNoteRoute);
