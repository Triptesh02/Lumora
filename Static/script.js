console.log("Lumora JS loaded");

// Example: Fetch papers from backend
async function fetchPapers() {
    try {
        const res = await fetch('/fetch-papers');
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Failed to fetch papers:", err);
    }
}
