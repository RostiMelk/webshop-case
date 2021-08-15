import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

const useShop = (endpoint, params = null) => {
	const [response, setResponse] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchData = async (endpoint) => {
		try {
			const response = await axios.get(endpoint, { params });
			setResponse(response.data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData(endpoint);
	}, []);

	return { response, error, loading };
};

export default useShop;
