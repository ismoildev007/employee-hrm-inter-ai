// API Configuration
const API_URLS = {
    local8000: 'http://localhost:8000/api/v1',
    local8001: 'http://localhost:8001/api/v1',
    production: 'https://api.lms.inter-ai.uz/api/v1'
};

// Set the active base URL here
// Options: 'local8000', 'local8001', 'production'
const ACTIVE_ENV = 'local8000';

export const BASE_URL = API_URLS[ACTIVE_ENV];

// Helper function to build full API URL
export const buildUrl = (endpoint) => {
    return `${BASE_URL}${endpoint}`;
};

export default {
    BASE_URL,
    buildUrl
};
