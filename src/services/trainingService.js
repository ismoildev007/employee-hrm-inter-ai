import { buildUrl } from '../config/api';

/**
 * Fetch all training blocks
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} - Blocks data with pagination
 */
export const fetchBlocks = async (page = 1) => {
    try {
        const response = await fetch(buildUrl(`/user/blocks?page=${page}`), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching blocks:', error);
        throw error;
    }
};

/**
 * Fetch educational fields (directions) for a specific block
 * @param {number} blockId - Block ID to filter by
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} - Educational fields data with pagination
 */
export const fetchEducationalFields = async (blockId = null, page = 1) => {
    try {
        let url = `/user/educational-fields?page=${page}`;
        if (blockId) {
            url += `&block_id=${blockId}`;
        }

        const response = await fetch(buildUrl(url), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching educational fields:', error);
        throw error;
    }
};

/**
 * Fetch tutorials (lessons) for a specific educational field
 * @param {number} educationalFieldId - Educational field ID to filter by
 * @param {number} page - Page number for pagination
 * @returns {Promise<Object>} - Tutorials data with pagination
 */
export const fetchTutorials = async (educationalFieldId = null, page = 1) => {
    try {
        let url = `/user/tutorials?page=${page}`;
        if (educationalFieldId) {
            url += `&educational_field_id=${educationalFieldId}`;
        }

        const response = await fetch(buildUrl(url), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching tutorials:', error);
        throw error;
    }
};

/**
 * Fetch tutorial detail by ID
 * @param {number} tutorialId - Tutorial ID
 * @returns {Promise<Object>} - Tutorial detail with videos, files, and tests
 */
export const fetchTutorialDetail = async (tutorialId) => {
    try {
        const response = await fetch(buildUrl(`/user/tutorials/${tutorialId}`), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching tutorial detail:', error);
        throw error;
    }
};

/**
 * Submit test attempt
 * @param {number} tutorialId - Tutorial ID
 * @param {number} testId - Test ID
 * @param {Array} answers - Array of answers with question_id and option_ids
 * @returns {Promise<Object>} - Test attempt result
 */
export const submitTestAttempt = async (tutorialId, testId, answers) => {
    try {
        const response = await fetch(buildUrl(`/user/tutorials/${tutorialId}/tests/${testId}/attempts`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            },
            body: JSON.stringify({ answers })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting test attempt:', error);
        throw error;
    }
};

/**
 * Submit feedback for tutorial
 * @param {number} tutorialId - Tutorial ID
 * @param {string} feedbackText - Feedback text
 * @returns {Promise<Object>} - Feedback submission result
 */
export const submitFeedback = async (tutorialId, feedbackText) => {
    try {
        const response = await fetch(buildUrl(`/user/tutorials/${tutorialId}/feedback`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            },
            body: JSON.stringify({ feedback_text: feedbackText })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting feedback:', error);
        throw error;
    }
};

/**
 * Fetch dashboard data
 * @returns {Promise<Object>} Dashboard data with stats, recent attempts, recommended tutorials, and feedbacks
 */
export const fetchDashboard = async () => {
    try {
        const response = await fetch(buildUrl('/user/dashboard'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching dashboard:', error);
        throw error;
    }
};

/**
 * Fetch training statistics
 * @returns {Promise<Object>} Training statistics (blocks, directions, tutorials, questions)
 */
export const fetchStats = async () => {
    try {
        const response = await fetch(buildUrl('/user/stats'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-api-key': '09d5a8233bfb55786ab182166694cd85a96f4c7f831b9ae9f1f7454c4b11c12f'
            }
        });

        console.log(response);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching stats:', error);
        throw error;
    }
};

export default {
    fetchBlocks,
    fetchEducationalFields,
    fetchTutorials,
    fetchTutorialDetail,
    submitTestAttempt,
    submitFeedback,
    fetchDashboard,
    fetchStats
};
