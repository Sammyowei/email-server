


const admin = require("firebase-admin")

const serviceAccount = require("./service-acc.json")

// const serviceAccount = JSON.parse(fs.readFileSync("./service-acc.json", "utf8"));

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
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
async function sendFirebasePushNotification(deviceToken, title, body, data = {}) {
    const message = {
        token: deviceToken,
        notification: {
            title,
            body,
        },
        data, // Attach custom data payload if provided
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

module.exports = sendFirebasePushNotification;
