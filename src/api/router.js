import statusRoutes from './v1/modules/status/status.routes';
import publicationsRoutes from './v1/modules/publications/publications.routes';
import config from '../config/env.config';

const router = (app) => {
    app.use(config.version, statusRoutes);
    app.use(config.version, publicationsRoutes);
    app.all('*', (req, res) => {
        res.status(404).send('404 Not Found');
    });
}

export default router;