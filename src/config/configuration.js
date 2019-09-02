import { config } from 'dotenv';
config();
const envVars = process.env;
const configuration = Object.freeze({
    port: envVars.PORT,
    node_env: process.env.NODE_ENV,
    service_url:envVars.SERVICE_URL
});
export default configuration;
