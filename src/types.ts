export enum Gender {
	Male = 'male',
	Female = 'female',
	Other = 'other',
}

export interface Diagnose {
	code: string;
	name: string;
	latin?: string;
}

interface BaseEntry {
	id: string;
	date: string;
	type: string;
	specialist: string;
	description: string;
	diagnosisCodes?: Array<Diagnose['code']>;
}

export enum HealthCheckRating {
	'Healthy' = 0,
	'LowRisk' = 1,
	'HighRisk' = 2,
	'CriticalRisk' = 3,
}

interface SickLeave {
	startDate: string;
	endDate: string;
}

interface OccupationalHealthCareEntry extends BaseEntry {
	type: 'OccupationalHealthcare';
	employerName: string;
	sickLeave?: SickLeave;
}

interface Discharge {
	date: string;
	criteria: string;
}

interface HospitalEntry extends BaseEntry {
	type: 'Hospital';
	discharge: Discharge;
}

interface HealthCheckEntry extends BaseEntry {
	type: 'HealthCheck';
	healthCheckRating: HealthCheckRating;
}

export type Entry =
	| HospitalEntry
	| OccupationalHealthCareEntry
	| HealthCheckEntry;

export interface Patient {
	id: string;
	name: string;
	dateOfBirth: string;
	ssn: string;
	gender: Gender;
	occupation: string;
	entries: Entry[];
}

export type NewPatientEntry = Omit<Patient, 'id'>;

export type NonSensitivePatientEntry = Omit<Patient, 'ssn' | 'entries'>;
