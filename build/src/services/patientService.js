"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const patients_1 = __importDefault(require("../../data/patients"));
const getEntries = () => {
    return patients_1.default;
};
const getNonSensitiveEntries = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
const addPatient = (entry) => {
    const newPatientEntry = Object.assign({ id: (0, uuid_1.v4)() }, entry);
    patients_1.default.push(newPatientEntry);
    return newPatientEntry;
};
const getPatient = (patientId) => {
    return patients_1.default.find((patient) => patient.id === patientId);
};
exports.default = {
    getEntries,
    getNonSensitiveEntries,
    addPatient,
    getPatient,
};
