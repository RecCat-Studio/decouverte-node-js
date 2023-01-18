import * as statusService from './status.service';

export const status = (req, res) => {

    const status = statusService.getApplicationStatus();

    res.status(200).json(status);
}