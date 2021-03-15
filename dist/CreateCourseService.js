"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    async execute({ name, educator, duration = 8 }) {
        console.log(name, educator, duration);
    }
}
exports.default = new CreateCourseService();
