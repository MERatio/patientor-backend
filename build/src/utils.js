"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewPatientEntry = void 0;
const types_1 = require("./types");
const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const parseStringValue = (prop, value) => {
    if (!value || !isString(value)) {
        throw new Error(`Incorrect or missing: ${prop}`);
    }
    return value;
};
// const parseName = (name: unknown): string => {
// 	if (!name || !isString(name)) {
// 		throw new Error('Incorrect or missing name');
// 	}
// 	return name;
// };
const parseDateOfBirth = (dateOfBirth) => {
    if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
        throw new Error(`Incorrect or missing date of birth: ${dateOfBirth}`);
    }
    return dateOfBirth;
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error(`Incorrect or missing gender: ${gender}`);
    }
    return gender;
};
const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation, }) => {
    const newEntry = {
        name: parseStringValue('name', name),
        dateOfBirth: parseDateOfBirth(dateOfBirth),
        ssn: parseStringValue('ssn', ssn),
        gender: parseGender(gender),
        occupation: parseStringValue('occupation', occupation),
    };
    return newEntry;
};
exports.toNewPatientEntry = toNewPatientEntry;
