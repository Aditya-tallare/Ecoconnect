import { db } from "../../firebase";
import { ref, push } from "firebase/database";

export const submitContactForm = async (name, email, message) => {
    try {
        await push(ref(db, "contacts"), {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        });

        alert("Message sent successfully!");
    } catch (error) {
        console.error("Error submitting contact form:", error.message);
        alert("Failed to send message. Please try again.");
    }
};
