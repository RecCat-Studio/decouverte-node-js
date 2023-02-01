import express from 'express';
import * as publicationController from './publications.controller';

const router = express.Router();

router.route('/publications')
    
    .get([
        publicationController.readAll
    ])

    .post([
        publicationController.create
    ])

router.route('/publications/:id')

    .get([
        publicationController.readById
    ])

export default router;