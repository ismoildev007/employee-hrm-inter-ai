import { buildUrl } from '../config/api';

/**
 * Login user with phone and password
 * @param {string} phone - User's phone number
 * @param {string} password - User's password
 * @returns {Promise<Object>} - Login response with user data and token
 */
export const login = async (phone, password) => {
    try {
        const response = await fetch(buildUrl('/auth/login'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            },
            body: JSON.stringify({
                phone,
                password
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Store token and user data in localStorage
        if (result.success && result.data && result.data.token) {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('user', JSON.stringify(result.data.user));
        }

        return result;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

/**
 * Register new user
 * @param {Object} userData - User registration data
 * @param {string} userData.first_name - User's first name
 * @param {string} userData.last_name - User's last name
 * @param {string} userData.phone - User's phone number
 * @param {string} userData.password - User's password
 * @param {string|null} userData.raw_data - Additional raw data (optional)
 * @returns {Promise<Object>} - Registration response with user data and token
 */
export const register = async (userData) => {
    try {
        const response = await fetch(buildUrl('/auth/register'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Store token and user data in localStorage
        if (result.success && result.data && result.data.token) {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('user', JSON.stringify(result.data.user));
        }

        return result;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

/**
 * Logout user
 */
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
};

/**
 * Get current user from localStorage
 * @returns {Object|null} - User object or null if not logged in
 */
export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
};

/**
 * Check if user is authenticated
 * @returns {boolean} - True if user has valid token
 */
export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

/**
 * Fetch current user data from API
 * @returns {Promise<Object>} - User data
 */
export const fetchUser = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) return null;

        const response = await fetch(buildUrl('/user/me'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && result.data) {
            // Update localStorage with fresh data
            localStorage.setItem('user', JSON.stringify(result.data));
            return result.data;
        }
        return null;
    } catch (error) {
        console.error('Fetch user error:', error);
        return null; // Return null instead of throwing to prevent app crash
    }
};

export default {
    login,
    register,
    logout,
    getCurrentUser,
    isAuthenticated,
    fetchUser
};
