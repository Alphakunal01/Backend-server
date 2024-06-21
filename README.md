# Backend Server for Form Submissions

This project implements a backend server using Express and TypeScript to handle form submissions.

## Endpoints

- `/ping` (GET): Always returns `{ success: true }`.
- `/submit` (POST): Accepts JSON payload with fields `name`, `email`, `phone`, `github_link`, `stopwatch_time` to save form submissions.
- `/read` (GET): Accepts query parameter `index` (0-indexed) to retrieve a specific form submission.
