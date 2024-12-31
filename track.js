const admin = require("firebase-admin");


// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(require("./firebase-service-account.json")), // Replace with your service account JSON file path
    });
}

/**
 * Sends a Firebase push notification using Firebase Admin SDK.
 *
 * @param {string} deviceToken - The target device's FCM token.
 * @param {string} title - The title of the notification.
 * @param {string} body - The body of the notification.
 * @param {Object} data - Custom data payload (optional).
 * @returns {Promise<Object>} - The response from Firebase.
 */
async function sendFirebasePushNotification(deviceToken, title, body) {
    const message = {
        token: deviceToken,
        notification: {
            title,
            body,
        },

    };

    try {
        const response = await admin.messaging().send(message);
        console.log("Notification sent successfully:", response);
        return response;
    } catch (error) {
        console.error("Error sending notification:", error);
        throw error;
    }
}
export default sendFirebasePushNotification;