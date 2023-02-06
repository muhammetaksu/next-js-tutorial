export const API_URL =
    process.env.NODE_ENV === "production"
        ? "http://www.example.com"
        : "http://localhost:5000";
