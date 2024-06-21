import express from 'express';
import submissionsRouter from './routes/submissionsRouter';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/', submissionsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
