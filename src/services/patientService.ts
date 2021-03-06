import { v4 as uuidv4 } from 'uuid';
import patientData from '../../data/patients';
import { Patient, NewPatientEntry, NonSensitivePatientEntry } from '../types';

const getEntries = (): Array<Patient> => {
	return patientData;
};

const getNonSensitiveEntries = (): Array<NonSensitivePatientEntry> => {
	return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation,
	}));
};

const addPatient = (entry: NewPatientEntry): Patient => {
	const newPatientEntry = {
		id: uuidv4(),
		...entry,
	};
	patientData.push(newPatientEntry);
	return newPatientEntry;
};

const getPatient = (patientId: string): Patient | undefined => {
	return patientData.find((patient) => patient.id === patientId);
};

export default {
	getEntries,
	getNonSensitiveEntries,
	addPatient,
	getPatient,
};
