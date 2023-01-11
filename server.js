import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan(process.env.FORMAT_LOG));

app.get('/', (req, res) => {
    res.status(200).send('Hello World !!!');
});

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
});


app.listen(process.env.PORT, () => {
    console.info(`⚡ listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode ⚡`);
});



