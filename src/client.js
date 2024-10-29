import { createClient } from '@sanity/client';

export default createClient({
    projectId: "k6bkuwtx",
    dataset: "production",
    apiVersion: "2023-10-30", // use a specific date or "v1" (ensure this matches your API version)
    useCdn: true // set to false to disable the CDN cache, if you need the freshest data
});
