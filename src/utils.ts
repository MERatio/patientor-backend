import { Gender, NewPatientEntry } from './types';

const isString = (value: unknown): value is string => {
	return typeof value === 'string' || value instanceof String;
};

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
	return Object.values(Gender).includes(param);
};

const parseStringValue = (prop: string, value: unknown): string => {
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

const parseDateOfBirth = (dateOfBirth: unknown): string => {
	if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
		throw new Error(`Incorrect or missing date of birth: ${dateOfBirth}`);
	}
	return dateOfBirth;
};

const parseGender = (gender: unknown): Gender => {
	if (!gender || !isGender(gender)) {
		throw new Error(`Incorrect or missing gender: ${gender}`);
	}
	return gender;
};

type Fields = {
	name: unknown;
	dateOfBirth: unknown;
	ssn: unknown;
	gender: unknown;
	occupation: unknown;
};

export const toNewPatientEntry = ({
	name,
	dateOfBirth,
	ssn,
	gender,
	occupation,
}: Fields): NewPatientEntry => {
	const newEntry: NewPatientEntry = {
		name: parseStringValue('name', name),
		dateOfBirth: parseDateOfBirth(dateOfBirth),
		ssn: parseStringValue('ssn', ssn),
		gender: parseGender(gender),
		occupation: parseStringValue('occupation', occupation),
	};

	return newEntry;
};
