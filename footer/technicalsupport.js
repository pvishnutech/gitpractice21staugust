/**
 * Technical Support Module for Cricbuzz Sample
 * Provides basic support contact and FAQ functionality.
 */

const techSupport = {
    contactInfo: {
        email: "support@cricbuzz.com",
        phone: "+1-800-CRICBUZZ",
        hours: "Mon-Fri 9am-6pm IST"
    },
    faqs: [
        {
            question: "How do I reset my Cricbuzz password?",
            answer: "Go to the login page, click 'Forgot Password', and follow the instructions sent to your registered email."
        },
        {
            question: "Why am I not receiving live score updates?",
            answer: "Please check your internet connection and ensure you have the latest version of the Cricbuzz app."
        },
        {
            question: "How can I contact Cricbuzz technical support?",
            answer: "You can email us at support@cricbuzz.com or call +1-800-CRICBUZZ during support hours."
        }
    ],
    getContactInfo() {
        return this.contactInfo;
    },
    getFAQs() {
        return this.faqs;
    },
    findFAQ(keyword) {
        return this.faqs.filter(faq =>
            faq.question.toLowerCase().includes(keyword.toLowerCase())
        );
    }
};

// Example usage:
console.log("Cricbuzz Tech Support Contact:", techSupport.getContactInfo());
console.log("Cricbuzz FAQs:", techSupport.getFAQs());
console.log("Search FAQ for 'password':", techSupport.findFAQ("password"));

module.exports = techSupport;