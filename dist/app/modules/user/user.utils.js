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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedAdminId = exports.findLastAdminID = exports.genareteFacultyId = exports.findLastFacultyId = exports.genareteStudentID = exports.findLastStudentId = void 0;
const user_model_1 = require("./user.model");
const findLastStudentId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudent = yield user_model_1.User.findOne({
        role: 'student',
    }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id) ? lastStudent.id.substring(4) : undefined;
});
exports.findLastStudentId = findLastStudentId;
const genareteStudentID = (academicSemester) => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield (0, exports.findLastStudentId)()) || (0).toString().padStart(5, '0');
    let incrimentedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrimentedId = `${academicSemester === null || academicSemester === void 0 ? void 0 : academicSemester.year.substring(2)}${academicSemester === null || academicSemester === void 0 ? void 0 : academicSemester.code}${incrimentedId}`;
    return incrimentedId;
});
exports.genareteStudentID = genareteStudentID;
// Faculty Id Generated
const findLastFacultyId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastFaculty = yield user_model_1.User.findOne({
        role: 'faculty',
    }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastFaculty === null || lastFaculty === void 0 ? void 0 : lastFaculty.id) ? lastFaculty.id.substring(2) : undefined;
});
exports.findLastFacultyId = findLastFacultyId;
const genareteFacultyId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield (0, exports.findLastFacultyId)()) || (0).toString().padStart(5, '0');
    let incrimentedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrimentedId = `F-${incrimentedId}`;
    return incrimentedId;
});
exports.genareteFacultyId = genareteFacultyId;
// Admin Id Genereted
const findLastAdminID = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastAdmin = yield user_model_1.User.findOne({
        role: 'admin',
    }, {
        id: 1,
        _id: 0,
    })
        .sort({ createdAt: -1 })
        .lean();
    return (lastAdmin === null || lastAdmin === void 0 ? void 0 : lastAdmin.id) ? lastAdmin.id.substring(2) : undefined;
});
exports.findLastAdminID = findLastAdminID;
const generatedAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield (0, exports.findLastAdminID)()) || (0).toString().padStart(5, '0');
    let incrimentedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrimentedId = `A-${incrimentedId}`;
    return incrimentedId;
});
exports.generatedAdminId = generatedAdminId;
