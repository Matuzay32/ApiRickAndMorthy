import React, { useState, useEffect } from "react";

export default function useFetch(url, updateDatos) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			try {
				const data = await fetch(url);
				const res = await data
					.json()
					.finally(() => setLoading(false));
				updateDatos(res);
			} catch (error) {
				console.log(error);
			}
		})();

		return () => {};
	}, [url]);

	return { loading };
}
