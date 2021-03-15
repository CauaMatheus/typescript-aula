"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    async execute({ name, duration, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
