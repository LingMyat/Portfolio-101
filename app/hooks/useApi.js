import { useState, useEffect } from 'react';

export default function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();

                setData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
                setSuccess(true);
            }
        };

        fetchData();
        
    }, [endpoint]);

    return { data, error, loading, success };
};
