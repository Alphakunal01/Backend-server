import { Request, Response } from 'express';
import fs from 'fs';

const DB_FILE = './src/db.json';

interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

export const ping = (req: Request, res: Response) => {
    res.json({ success: true });
};

export const submitForm = (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body as Submission;
    const submissions = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8')) as Submission[];
    const newSubmission = { name, email, phone, github_link, stopwatch_time };
    submissions.push(newSubmission);
    fs.writeFileSync(DB_FILE, JSON.stringify(submissions, null, 2));
    res.status(201).json({ success: true, message: 'Form submitted successfully' });
};

export const readForm = (req: Request, res: Response) => {
    const index = Number(req.query.index);
    const submissions = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8')) as Submission[];
    if (index >= 0 && index < submissions.length) {
        res.json(submissions[index]);
    } else {
        res.status(404).json({ success: false, message: 'Submission not found' });
    }
};
