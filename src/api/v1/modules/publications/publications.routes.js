import express from 'express';
import * as publicationController from './publications.controller';

const router = express.Router();

router.route('/publications')
    
    .post([
        publicationController.create
    ])

export default router;