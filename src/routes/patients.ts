import express from 'express';
import patientService from '../services/patientService';
import { toNewPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
	res.send(patientService.getNonSensitiveEntries());
});

router.post('/', (req, res) => {
	try {
		const newPatientEntry = toNewPatientEntry(req.body);
		const addedPatient = patientService.addPatient(newPatientEntry);
		res.json(addedPatient);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		res.status(400).send(err.message);
	}
});

router.get('/:patientId', (req, res) => {
	try {
		const patient = patientService.getPatient(req.params.patientId);
		if (patient === undefined) {
			res.status(404);
		} else {
			res.json(patient);
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		res.status(400).send(err.message);
	}
});

export default router;
