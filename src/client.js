import { createClient } from "@sanity/client";

export default createClient({
    projectId: "k6bkuwtx", // Replace with your project ID
    dataset: "production",
    apiVersion: "2023-10-30", // The version should match what’s set up in Sanity
    useCdn: true, // Set to false if you want fresh data without cache
});
