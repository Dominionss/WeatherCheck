import React, { useEffect, useState } from "react";

function RandomCatFactFetcher() {
    const [fact, setFact] = useState("");        // store cat fact
    const [loading, setLoading] = useState(true); // start with loading
    const [error, setError] = useState(null);    // error state

    const fetchFact = async () => {
        setLoading(true);   // start loading before fetch
        setError(null);     // clear previous errors

        try {
            const response = await fetch("https://catfact.ninja/fact");
            if (!response.ok) {
                throw new Error("Failed to fetch cat fact");
            }

            const data = await response.json();

            // ⏳ Wait 1 second before showing fact
            setTimeout(() => {
                setFact(data.fact);
                setLoading(false);
            }, 1000);

            console.log("Timer does not stop this line!");
            console.log("I learned a lot of theory today, i will practice with a randomuser data tomorrow!");

        } catch (err) {
            setError(err.message);
            setLoading(false); // still stop loading if error
        }
    };

    // Fetch a fact on first render
    useEffect(() => {
        fetchFact();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <div>
            <h2>Random Cat Fact 🐾</h2>
            <p>{fact}</p>
            <button onClick={fetchFact}>New fact</button>
        </div>
    );
}

export default RandomCatFactFetcher;