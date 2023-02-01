import { publications } from '../../../../data/publication.data';
import * as publicationsService from './publications.service';

export const create = (req, res) => {
    const { body } = req;
    
    const publicationCreated = publicationsService.create(body);
    
    return res.status(201).json(publicationCreated);
}

export const readAll = (req, res) => {

    const publications = publicationsService.readAll();

    return res.status(200).json(publications);
}

export const readById = (req, res) => {
    const { params } = req;

    const publication = publicationsService.readById(params.id);

    return res.status(200).json(publication);
}