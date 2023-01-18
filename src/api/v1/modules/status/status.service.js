import { API_NAME } from "../../../../config/constants"
import packageJson from '../../../../../package.json';

export const getApplicationStatus = () => {
    const applicationStatus = {
        NODE_ENV: process.env.NODE_ENV,
        API_VERSION: packageJson.version,
        API_NAME: API_NAME
    }

    return applicationStatus;
}