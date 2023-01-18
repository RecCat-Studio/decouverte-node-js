import express from 'express';
import * as statusController from './status.controller';

const router = express.Router();

router.route('/status')
    
    .get([
        statusController.status
    ])

export default router;