import express from 'express';
import morgan from 'morgan';
import router from './src/api/router';
import config from './src/config/env.config';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(config.format_log));

router(app);

app.listen(config.port, () => {
	console.info(`⚡ listening on port ${config.port} in ${config.node_env} mode ⚡`);
});



