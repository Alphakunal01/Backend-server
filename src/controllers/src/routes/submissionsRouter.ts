import express from 'express';
import { ping, submitForm, readForm } from '../controllers/submissionsController';

const router = express.Router();

router.get('/ping', ping);
router.post('/submit', submitForm);
router.get('/read', readForm);

export default router;
