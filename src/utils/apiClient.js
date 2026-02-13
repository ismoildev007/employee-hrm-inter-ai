/**
 * API Client - Centralized fetch wrapper with 401 auto-logout
 * 
 * This wrapper intercepts all API responses and automatically logs out
 * users when receiving 401 (Unauthorized) status codes.
 */

/**
 * Enhanced fetch wrapper with automatic 401 handling
 * @param {string} url - The URL to fetch
 * @param {Object} options - Fetch options (headers, method, body, etc.)
 * @returns {Promise<Response>} - The fetch response
 * @throws {Error} - Throws error if 401 or other fetch errors occur
 */
export const apiFetch = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);

        // Check for 401 Unauthorized
        if (response.status === 401) {
            console.warn('⚠️ 401 Unauthorized - Token expired or invalid. Logging out...');

            // Clear authentication data
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            // Redirect to login page
            window.location.href = '/login';

            // Throw error to stop further processing
            throw new Error('Session expired. Please login again.');
        }

        return response;
    } catch (error) {
        // If it's a 401 error we already handled, re-throw it
        if (error.message === 'Session expired. Please login again.') {
            throw error;
        }

        // For other errors, log and re-throw
        console.error('API Fetch Error:', error);
        throw error;
    }
};

/**
 * Helper to get authorization headers
 * @returns {Object} - Headers object with Authorization token if available
 */
export const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
};

export default {
    apiFetch,
    getAuthHeaders
};
